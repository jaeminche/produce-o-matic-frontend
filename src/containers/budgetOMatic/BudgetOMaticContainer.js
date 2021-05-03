import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BudgetOMatic from '../../components/budgetOMatic/BudgetOMatic';
import {
  OPTIONS,
  moveItemBeforeAnotherInArr,
  defaultCurrencyRates,
} from '../../lib/constants/budgetomatic';
import { getUsersLocation } from '../../modules/thirdPartyApis';
import { listItemsGroups } from '../../modules/itemsGroups';
import { postBudgetResult } from '../../modules/budgetResult';
import produce from 'immer';
import { v1 } from 'uuid';
import CurrencyFixer from '../currencyFixer/CurrencyFixer';
import { getGrandTotal } from '../../lib/helper/calculation';
import { myToast } from '../../lib/util/myToast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const BudgetOMaticContainer = ({ history, location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();

  const {
    IP,
    USERSLOCATION,
    CURRENCYSET,
    ipError,
    currencySetError,
    usersLocationError,

    DATASETS,
    RES,
    error,
    loading,
  } = useSelector(({ thirdPartyApis, itemsGroups, budgetResult, loading }) => ({
    IP: thirdPartyApis.ip,
    USERSLOCATION: thirdPartyApis.usersLocation,
    CURRENCYSET: thirdPartyApis.currencyset,
    currencySetError: thirdPartyApis.currencySetError,
    ipError: thirdPartyApis.ipError,
    usersLocationError: thirdPartyApis.usersLocationError,

    DATASETS: itemsGroups.dataSets,
    RES: budgetResult.res,
    error: itemsGroups.error,
    loading: loading['itemsGroups/LIST_ITEMSGROUPS'],
  }));

  // ? 1. request dataSetInstance data and full dataset
  const [myDataSets, setMyDataSets] = useState('');
  const [dataSetInstance, setDataSetInstance] = useState('');
  const [countForDataChange, setCountForDataChange] = useState(1);
  const [typeOfProduction, setTypeOfProduction] = useState('DO');
  const [daysOfShooting, setDaysOfShooting] = useState(1);
  const [currency, setCurrency] = useState('KRW');
  const [currencyRates, setCurrencyRates] = useState(defaultCurrencyRates);
  const [currencyRate, setCurrencyRate] = useState(currencyRates[currency]);
  const [addedOptions, setAddedOptions] = useState(OPTIONS);
  // const [categoryTotals, setCategoryTotals] = useState(null);
  // const [grandTotal, setGrandTotal] = useState(null);

  // const history = useHistory();

  // * MAJOR FEATURES
  // * 1. on page load, get any saved data in localStorage, and ask user if she/he wants to load the data
  // * 2. automatic save on any dataSetInstance change (currently not saving type of production, days of shooting, currency)
  // * 3. initialize button
  useEffect(() => {
    try {
      const _dataSetInstance = localStorage.getItem('_dataSetInstance');
      // ? Do not show confirm message modal : 1. when user clicks '< Back' button in Calculation Result Page, 2. when user is from any other page but has recently checked out Calculation Result Page already
      const prevPath = location.state && location.state.from;
      if (RES || (prevPath && prevPath.includes('budget-o-matic/result'))) {
        _dataSetInstance && setDataSetInstance(JSON.parse(_dataSetInstance));
      } else {
        // ? Show confirm-alert modal: only when user has not recently checked out Calculation Result page, or user has no RES data.
        if (_dataSetInstance) {
          confirmAlert({
            title: 'Saved data found!',
            message:
              'We found a saved data in your system. Would you like to load it?',
            buttons: [
              {
                label: 'Yes!',
                onClick: () => {
                  setDataSetInstance(JSON.parse(_dataSetInstance));
                },
              },
              {
                label: "No, I'd like to start from the scratch.",
                onClick: () => {},
              },
            ],
            childrenElement: () => <div />,
            closeOnEscape: true,
            closeOnClickOutside: true,
            willUnmount: () => {},
            afterClose: () => {},
            onClickOutside: () => {},
            onKeypressEscape: () => {},
          });
        }
      }
    } catch (e) {
      console.log('localStorage is not working');
    }
  }, []);

  useEffect(() => {
    if (USERSLOCATION && OPTIONS) {
      const usersCurrencyCode = USERSLOCATION.currency;
      if (!OPTIONS.currency.includes(usersCurrencyCode)) {
        const tempOptions = JSON.parse(JSON.stringify(OPTIONS));
        tempOptions.currency.push(usersCurrencyCode);
        setAddedOptions(tempOptions);
        console.log('hahahahah');
      }
    }
  }, [USERSLOCATION]);

  useEffect(() => {
    // ? if currency rates data are retrieved and the user specifies a currency, we update our 5 currencies rates set.
    if (CURRENCYSET /* && CURRENCYSET.success*/) {
      let { rates } = CURRENCYSET;
      console.log('==923', CURRENCYSET);
      if (rates) {
        if (!rates['EUR']) rates = { ...rates, EUR: 1 }; // provide EUR's rate, for exchangeratesapi.io doesn't provide the base currency rate.
        const userSelectedCurrencyRate = rates[currency];
        const base = rates['KRW'];
        let tempCurrencyRates = {
          KRW: 1,
          USD: 1 / (rates['USD'] / base),
          EUR: 1 / (rates['EUR'] / base),
          CNY: 1 / (rates['CNY'] / base),
        };
        tempCurrencyRates[currency] = 1 / (userSelectedCurrencyRate / base);
        console.log('===234', userSelectedCurrencyRate, tempCurrencyRates);
        setCurrencyRates(tempCurrencyRates);
      }
    }
  }, [CURRENCYSET, currency]);

  useEffect(() => {
    // ? 1. API request for all template data
    dispatch(listItemsGroups());
  }, []);

  useEffect(() => {
    // ? 2. transform DATASETS into myDataSets (cascading dictionary format)
    if (DATASETS) {
      // 모든 그룹 정보에서 카테고리 값 (유니크한)을 하나씩만 가져와서 dictionary 포맷으로 재배열한다
      const uniqueValues = [
        ...new Set(DATASETS.map((group) => group.category)),
      ];
      const tempMyDataSets = {};
      for (const value of uniqueValues) {
        tempMyDataSets[value] = [];
      }
      for (const GROUP of DATASETS) {
        tempMyDataSets[GROUP.category].push(GROUP);
      }
      setMyDataSets(tempMyDataSets);
    }
  }, [DATASETS]);

  useEffect(() => {
    // ? 특정된 환 & 환율 설정 : 초기 환율정보세트가 세팅되거나 사용자가 환율을 새로 특정할 때마다.
    if (currencyRates) {
      // setCurrencyRate(defaultCurrencyRates[currency]);
      setCurrencyRate(currencyRates[currency]);
    }
  }, [currencyRates]);

  // useEffect(() => {
  //   if (currencyRate) {
  //     console.log('==235', currencyRate);
  //   }
  // }, [currencyRate]);

  // ? 3. create 'checked' attributes FOR both GROUP and BUDGETITEM, and make an INSTANCE out of the original datasets retrieved
  // * update dataSetInstance 1/3
  const initializeDataSetInstance = ({ totalReset }) => {
    // * when totalReset is true, get (initial) myDataSets instead of dataSetInstance being used
    const tempDataSet = totalReset ? myDataSets : dataSetInstance || myDataSets;

    const defaultAmnt = 1;
    const baseState = { ...tempDataSet };
    const nextState = produce(baseState, (draftState) => {
      // draftState[name][idx][key] = value;
      for (let [key, category] of Object.entries(draftState)) {
        for (let group of category) {
          group.options = [];
          for (let budgetItem of group.budgetItems) {
            budgetItem.checked = budgetItem.tags.includes(typeOfProduction);
            // ? if there's data, leave it, but may change
            if (!budgetItem.amnt) budgetItem.amnt = defaultAmnt;
            if (!budgetItem.days) budgetItem.days = daysOfShooting;

            // * make options dropdown for budgetItem Select (IMPORTANT! Orders in the sets remain as these at initialization)
            group.options.push({
              budgetItemCode: budgetItem.code,
              budgetItemName: budgetItem.name,
            });
          }
          // * normalize its order, in case it may have been changed from the previous user inpus.
          dataSetInstance &&
            group.options.sort((a, b) => a.budgetItemCode - b.budgetItemCode);

          // * IMPORTANT! update group.checked as well
          group.checked = group.budgetItems.some(
            (budgetItem) => budgetItem.checked,
          );
          const itemtotals = group.checked
            ? group.budgetItems.map((item) => {
                const product = item.checked
                  ? item.rate[0] * item.amnt * item.days
                  : 0;
                item.itemtotal = product;
                return product;
              })
            : [];
          group.subtotal =
            itemtotals.length > 0
              ? itemtotals.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                )
              : 0;
        }
      }
    });
    setDataSetInstance(nextState);
  };
  useEffect(() => {
    if (myDataSets && typeOfProduction) {
      initializeDataSetInstance({ totalReset: false });
    }
  }, [myDataSets, typeOfProduction]);

  const updateDataSetInstanceAllAtOnce = ({ target, value }) => {
    const baseState = { ...dataSetInstance };
    const nextState = produce(baseState, (draftState) => {
      // draftState[name][idx][key] = value;
      for (let [key, category] of Object.entries(draftState)) {
        for (let group of category) {
          for (let budgetItem of group.budgetItems) {
            budgetItem[target] = value;
          }
          // * IMPORTANT! update group.checked as well
          group.checked = group.budgetItems.some(
            (budgetItem) => budgetItem.checked,
          );
          const itemtotals = group.checked
            ? group.budgetItems.map((item) => {
                const product = item.checked
                  ? item.rate[0] * item.amnt * item.days
                  : 0;
                item.itemtotal = product;
                return product;
              })
            : [];
          group.subtotal =
            itemtotals.length > 0
              ? itemtotals.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                )
              : 0;
        }
      }
    });
    setDataSetInstance(nextState);
  };
  useEffect(() => {
    if (dataSetInstance && daysOfShooting) {
      updateDataSetInstanceAllAtOnce({ target: 'days', value: daysOfShooting });
    }
  }, [daysOfShooting]);

  useEffect(() => {
    if (!!dataSetInstance) {
      setCountForDataChange(countForDataChange + 1);
      try {
        localStorage.setItem(
          '_dataSetInstance',
          JSON.stringify(dataSetInstance),
        );
        countForDataChange % 5 === 0 && myToast('saving...');
      } catch (e) {
        console.log('LocalStorage is not working!');
        myToast(
          'LocalStorage is not working! We could not save your data in your local storage.',
        );
      }
    }
  }, [dataSetInstance]);

  // * update dataSetInstance 2/3
  const toggleGroupInDataSetInstance = ({ code, toggleCheck }) => {
    console.log('update type: 2. 토글 그룹');
    const baseState = { ...dataSetInstance };
    const nextState = produce(baseState, (draftState) => {
      // draftState[name][idx][key] = value;
      for (let [key, category] of Object.entries(draftState)) {
        for (let group of category) {
          if (group.code === code) {
            for (let [index, budgetItem] of group.budgetItems.entries()) {
              if (toggleCheck && index > 0) continue;
              budgetItem.checked = toggleCheck;
            }
          }
          // * IMPORTANT! update group.checked as well
          group.checked = group.budgetItems.some(
            (budgetItem) => budgetItem.checked,
          );
          const itemtotals = group.checked
            ? group.budgetItems.map((item) => {
                const product = item.checked
                  ? item.rate[0] * item.amnt * item.days
                  : 0;
                item.itemtotal = product;
                return product;
              })
            : [];
          group.subtotal =
            itemtotals.length > 0
              ? itemtotals.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                )
              : 0;
        }
      }
    });
    setDataSetInstance(nextState);
  };
  const onChangeToggleGroup = (e) => {
    const { value, checked } = e.target;
    toggleGroupInDataSetInstance({
      code: parseInt(value),
      toggleCheck: checked,
    });
  };

  const onChangeTypeOfProduction = (e) => {
    console.log('onchange', e.target.value);
    setTypeOfProduction(e.target.value);
  };
  const onChangeDaysOfShooting = (e) => {
    console.log('onchange', e.target.value);
    setDaysOfShooting(e.target.value);
  };
  const onChangeCurrency = (e) => {
    console.log('onchange', e.target.value);
    setCurrency(e.target.value);
  };

  // * update dataSetInstance 3/3
  const updateItemInDataSetInstance = ({
    name,
    value,
    willReplaceItem = false, // true, to prevent auto sort
    targetBudgetItemIdx = false,
  }) => {
    console.log('update type: 3. 아이템 수정');
    (willReplaceItem || targetBudgetItemIdx) &&
      console.log('update type: 3.5 아이템 수정 후 소팅 무효');

    const [targetGroupCd, targetBudgetItemCd, targetAttr] = name;
    const { newItemCode, amnt, days } = willReplaceItem;
    const oldIdx =
      (willReplaceItem && parseInt(willReplaceItem.oldIdx)) ||
      (targetBudgetItemIdx && parseInt(targetBudgetItemIdx));
    let newIdx;
    console.log('윌리블레이', newItemCode, amnt, days);

    const baseState = { ...dataSetInstance };
    const nextState = produce(baseState, (draftState) => {
      // draftState[name][idx][key] = value;
      for (let [key, category] of Object.entries(draftState)) {
        for (let group of category) {
          if (group.code === targetGroupCd) {
            newIdx =
              (willReplaceItem && parseInt(willReplaceItem.newIdx)) ||
              (targetBudgetItemIdx && group.budgetItems.length - 1);
            for (let budgetItem of group.budgetItems) {
              if (budgetItem.code === parseInt(targetBudgetItemCd)) {
                budgetItem[targetAttr] = value;
              }
              // ? Only if it's to replace old item with new one, do this:
              if (
                willReplaceItem &&
                budgetItem.code === parseInt(newItemCode)
              ) {
                budgetItem.checked = true;
                budgetItem.amnt = parseInt(amnt);
                budgetItem.days = parseInt(days);
              }

              // ? Only if it's to add a new item, the item has to be removed from the list and its copy  old item with new one, do this:
            }

            if (willReplaceItem /*|| targetBudgetItemIdx*/) {
              group.budgetItems = moveItemBeforeAnotherInArr(
                group.budgetItems,
                newIdx,
                oldIdx,
              );
            }

            group.checked = group.budgetItems.some(
              (budgetItem) => budgetItem.checked,
            );
            const itemtotals = group.checked
              ? group.budgetItems.map((item) => {
                  const product = item.checked
                    ? item.rate[0] * item.amnt * item.days
                    : 0;
                  item.itemtotal = product;
                  return product;
                })
              : [];
            group.subtotal =
              itemtotals.length > 0
                ? itemtotals.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                  )
                : 0;
          }
        }
      }
    });
    setDataSetInstance(nextState);
  };
  const onChangeSelect = (e) => {
    const { value } = e.target;
    let { name } = e.target;
    name = JSON.parse(name);
    updateItemInDataSetInstance({ name, value });
  };

  const onChangeReplace = ({
    e,
    amnt,
    days,
    oldIdx,
    newIdx,
    targetGroupCd,
  }) => {
    const { name, value } = e.target;
    const oldItemCode = name;
    const newItemCode = value;
    updateItemInDataSetInstance({
      name: [targetGroupCd, oldItemCode, 'checked'],
      value: false,
      willReplaceItem: { newItemCode, oldIdx, newIdx, amnt, days },
    });
  };

  const onClickRemove = ({
    targetGroupCd,
    targetBudgetItemCd = false,
    willTargetGroup,
  }) => {
    willTargetGroup
      ? toggleGroupInDataSetInstance({
          code: targetGroupCd,
          toggleCheck: false,
        })
      : updateItemInDataSetInstance({
          name: [targetGroupCd, targetBudgetItemCd, 'checked'],
          value: false,
        });
  };

  const onClickAdd = ({ targetGroupCd, targetBudgetItemCdAndIdx }) => {
    console.log('==21', targetBudgetItemCdAndIdx);

    const {
      targetBudgetItemCd,
      targetBudgetItemIdx,
    } = targetBudgetItemCdAndIdx;
    console.log(targetBudgetItemCd, targetBudgetItemIdx);
    updateItemInDataSetInstance({
      name: [targetGroupCd, targetBudgetItemCd, 'checked'],
      value: true,
      targetBudgetItemIdx: JSON.stringify(targetBudgetItemIdx), // to unsort; added item is always the last
    });
  };

  // * calculate dataSetInstance (onSubmit)
  const getCategoryTotals = () => {
    const totals = [];
    for (let [key, category] of Object.entries(dataSetInstance)) {
      let categorytotal = 0;
      for (let group of category) {
        categorytotal = categorytotal + group.subtotal;
      }
      totals.push({ [key]: categorytotal });
    }
    console.log('==229', totals);
    return totals;
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    console.log('onsubmit', e, e.target);
    //==결과 페이지 가는 과정
    // budgetomatic 페이지 컨펌 누르면>
    const _categoryTotals = getCategoryTotals();
    const _grandTotal = getGrandTotal(_categoryTotals);
    // setCategoryTotals(_categoryTotals);
    // setGrandTotal(_grandTotal);
    // 1. 데이터 post  >
    console.log('==305', history);

    dispatch(
      postBudgetResult({
        uuid: v1(),
        result: dataSetInstance,
        categoryTotals: _categoryTotals,
        grandTotal: _grandTotal,
        currency,
        currencyRate,
      }),
    );
    // 2. backend: db 저장 > 성공이면 > 아이디 반환 >
  };

  useEffect(() => {
    if (RES) {
      // 3. 아이디를 받아서 스토어에 저장. 있으면!! >
      // 4. 결과 페이지로 이동.

      // 5. 아이템 소팅, 토탈 & 그랜드토탈 계산 >
      // getCategoryTotals()
      // 6. 결과 페이지는 스토어에 아이디가 있으면>
      // 7. 결과 테이블 표시
      // const id = v1(); // TODO:
      console.log('==306', location);
      // if () {
      const { uuid } = RES;
      history.push(`/produce-o-matic/budget-o-matic/result/${uuid}`);
      // }
    }
  }, [RES]);

  return (
    <CurrencyFixer>
      <BudgetOMatic
        typeOfProduction={typeOfProduction}
        daysOfShooting={daysOfShooting}
        currency={currency}
        currencyRate={currencyRate}
        OPTIONS={addedOptions}
        dataSetInstance={dataSetInstance}
        initializeDataSetInstance={initializeDataSetInstance}
        onChangeTypeOfProduction={onChangeTypeOfProduction}
        onChangeDaysOfShooting={onChangeDaysOfShooting}
        onChangeCurrency={onChangeCurrency}
        onChangeToggleGroup={onChangeToggleGroup}
        onChangeSelect={onChangeSelect}
        onChangeReplace={onChangeReplace}
        onClickRemove={onClickRemove}
        onClickAdd={onClickAdd}
        onSubmit={onSubmit}
        isMobile={isMobile}
      />
    </CurrencyFixer>
  );
};

export default withRouter(BudgetOMaticContainer);

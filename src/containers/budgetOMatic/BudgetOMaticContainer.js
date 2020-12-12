import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BudgetOMatic from '../../components/budgetOMatic/BudgetOMatic';
import {
  BUDGETOMATIC_UIDATA,
  _INITIAL_CODES_SET,
} from '../../lib/constants/sampleBudgetomaticData';
import {
  OPTIONS,
  moveItemBeforeAnotherInArr,
} from '../../lib/constants/budgetomatic';
import { listItemsGroups } from '../../modules/itemsGroups';
import { myDataSetsTemplate } from '../../lib/constants/budgetomatic';
import produce from 'immer';

const BudgetOMaticContainer = ({ location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();

  const { DATASETS, error, loading } = useSelector(
    ({ itemsGroups, loading }) => ({
      DATASETS: itemsGroups.dataSets,
      error: itemsGroups.error,
      loading: loading['itemsGroups/LIST_ITEMSGROUPS'],
    }),
  );

  // 1. request dataSetInstance data and full dataset
  const [myDataSets, setMyDataSets] = useState('');
  const [dataSetInstance, setDataSetInstance] = useState('');
  const [typeOfProduction, setTypeOfProduction] = useState('DO');
  const [daysOfShooting, setDaysOfShooting] = useState(1);
  const [currency, setCurrency] = useState('KRW');

  const history = useHistory();

  useEffect(() => {
    // ? 1. API request for all data
    dispatch(listItemsGroups());
  }, []);

  useEffect(() => {
    // ? 2. transform DATASETS into myDataSets (cascading dictionary format)
    if (DATASETS) {
      const tempMyDataSets = JSON.parse(JSON.stringify(myDataSetsTemplate));
      for (const GROUP of DATASETS) {
        tempMyDataSets[GROUP.category].push(GROUP);
      }
      setMyDataSets(tempMyDataSets);
    }
  }, [DATASETS]);

  // ? 3. create 'checked' attributes FOR both GROUP and BUDGETITEM, and make an INSTANCE out of the original datasets retrieved
  // * update dataSetInstance 1/3
  const initializeDataSetInstance = () => {
    const tempDataSet = dataSetInstance || myDataSets;

    const defaultAmnt = 1;
    const baseState = { ...tempDataSet };
    const nextState = produce(baseState, (draftState) => {
      // draftState[name][idx][key] = value;
      for (let [key, category] of Object.entries(draftState)) {
        for (let group of category) {
          group.options = [];
          for (let budgetItem of group.budgetItems) {
            budgetItem.checked = budgetItem.tags.includes(typeOfProduction);
            // todo: if there's data, leave it, but may change
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
          const subtotal = group.checked
            ? group.budgetItems.map((item) =>
                item.checked ? item.rate[0] * item.amnt * item.days : 0,
              )
            : [];
          group.subtotal =
            subtotal.length > 0
              ? subtotal.reduce(
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
      initializeDataSetInstance();
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
    !!dataSetInstance && console.log('데이터 세팅됨: ', dataSetInstance);
  }, [dataSetInstance]);

  // * update dataSetInstance 2/3
  const toggleGroupInDataSetInstance = ({ code, toggleCheck }) => {
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
          const subtotal = group.checked
            ? group.budgetItems.map((item) =>
                item.checked ? item.rate[0] * item.amnt * item.days : 0,
              )
            : [];
          group.subtotal =
            subtotal.length > 0
              ? subtotal.reduce(
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
    willReplaceItem = false,
  }) => {
    const [targetGroupCd, targetBudgetItemCd, targetAttr] = name;
    const { newItemCode, amnt, days } = willReplaceItem;
    const oldIdx = parseInt(willReplaceItem.oldIdx);
    const newIdx = parseInt(willReplaceItem.newIdx);

    const baseState = { ...dataSetInstance };
    const nextState = produce(baseState, (draftState) => {
      // draftState[name][idx][key] = value;
      for (let [key, category] of Object.entries(draftState)) {
        for (let group of category) {
          if (group.code === targetGroupCd) {
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
            }

            if (willReplaceItem) {
              group.budgetItems = moveItemBeforeAnotherInArr(
                group.budgetItems,
                newIdx,
                oldIdx,
              );
            }

            group.checked = group.budgetItems.some(
              (budgetItem) => budgetItem.checked,
            );
            const subtotal = group.checked
              ? group.budgetItems.map((item) =>
                  item.checked ? item.rate[0] * item.amnt * item.days : 0,
                )
              : [];
            group.subtotal =
              subtotal.length > 0
                ? subtotal.reduce(
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
    // const newIdx = e.target.options.selectedIndex;
    const oldItemCode = name;
    const newItemCode = value;
    console.log(
      '온체인지리플레이스',
      'oldItemCode:',
      oldItemCode,
      'newItemCode:',
      newItemCode,
      '올드',
      oldIdx,
      '뉴:',
      newIdx,
    );
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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('onsubmit', e, e.target.value);
  };

  return (
    <BudgetOMatic
      typeOfProduction={typeOfProduction}
      daysOfShooting={daysOfShooting}
      currency={currency}
      OPTIONS={OPTIONS}
      dataSetInstance={dataSetInstance}
      onChangeTypeOfProduction={onChangeTypeOfProduction}
      onChangeDaysOfShooting={onChangeDaysOfShooting}
      onChangeCurrency={onChangeCurrency}
      onChangeToggleGroup={onChangeToggleGroup}
      onChangeSelect={onChangeSelect}
      onChangeReplace={onChangeReplace}
      onClickRemove={onClickRemove}
      onSubmit={onSubmit}
      uiData={BUDGETOMATIC_UIDATA}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetOMaticContainer);

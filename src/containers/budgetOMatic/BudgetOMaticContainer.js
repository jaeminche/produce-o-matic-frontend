import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BudgetOMatic from '../../components/budgetOMatic/BudgetOMatic';
import {
  BUDGETOMATIC_UIDATA,
  _INITIAL_CODES_SET,
} from '../../lib/constants/sampleBudgetomaticData';
import { OPTIONS } from '../../lib/constants/budgetomatic';
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
  const initializeDataSetInstance = () => {
    console.log('데어터셋인스턴스 유뮤', !!dataSetInstance, !!myDataSets);
    const tempDataSet = dataSetInstance || myDataSets;

    const defaultAmnt = 1;
    const baseState = { ...tempDataSet };
    const nextState = produce(baseState, (draftState) => {
      // draftState[name][idx][key] = value;
      for (let [key, category] of Object.entries(draftState)) {
        for (let group of category) {
          for (let budgetItem of group.budgetItems) {
            budgetItem.checked = budgetItem.tags.includes(typeOfProduction);
            // * if there's data, leave it
            if (!budgetItem.amnt) budgetItem.amnt = defaultAmnt;
            if (!budgetItem.days) budgetItem.days = daysOfShooting;
          }
          group.checked = group.budgetItems.some(
            (budgetItem) => budgetItem.checked,
          );
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

  const onChangeCheckbox = (e) => {
    console.log('버튼클릭트', e, e.target.value);
    // console.log('onchange', e.target.value);
    // defaultGroupsSelected
    // setDefaultGroupsSelected(e.target.value);
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

  const updateItemInDataSetInstance = ({ name, value }) => {
    const [targetGroupCd, targetBudgetItemCd, targetAttr] = name;
    const baseState = { ...dataSetInstance };
    const nextState = produce(baseState, (draftState) => {
      // draftState[name][idx][key] = value;
      for (let [key, category] of Object.entries(draftState)) {
        for (let group of category) {
          if (group.code === targetGroupCd) {
            for (let budgetItem of group.budgetItems) {
              if (budgetItem.code === targetBudgetItemCd) {
                budgetItem[targetAttr] = value;
              }
            }
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
    console.log('셀렉트변경');
    updateItemInDataSetInstance({ name, value });
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
      onChangeCheckbox={onChangeCheckbox}
      onChangeTypeOfProduction={onChangeTypeOfProduction}
      onChangeDaysOfShooting={onChangeDaysOfShooting}
      onChangeCurrency={onChangeCurrency}
      onChangeSelect={onChangeSelect}
      onSubmit={onSubmit}
      uiData={BUDGETOMATIC_UIDATA}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetOMaticContainer);

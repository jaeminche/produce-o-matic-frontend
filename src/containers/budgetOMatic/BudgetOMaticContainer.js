import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BudgetOMatic from '../../components/budgetOMatic/BudgetOMatic';
import {
  BUDGETOMATIC_UIDATA,
  _INITIAL_CODES_SET,
} from '../../lib/constants/sampleBudgetomaticData';
import { listItemsGroups } from '../../modules/itemsGroups';
import { generateQt, myDataSetsTemplate } from '../../lib/helper';
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
  const [myDataSets, setMyDataSets] = useState();
  const [dataSetInstance, setDataSetInstance] = useState();
  const [typeOfProduction, setTypeOfProduction] = useState('DO');
  const [daysOfShooting, setDaysOfShooting] = useState(1);
  const [currency, setCurrency] = useState('KRW');
  const [groupsSelected, setGroupsSelected] = useState();

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

  const initializeDataSetInstance = ({ target, value }) => {
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
    // ? 3. create checked attributes for both group and budgetItems and make an INSTANCE out of the original datasets retrieved
    if (myDataSets && typeOfProduction) {
      const tempDataSetInstance = JSON.parse(JSON.stringify(myDataSets));
      const defaultAmnt = 1;
      // const defaultGroupsSelected = [];
      for (let [key, category] of Object.entries(tempDataSetInstance)) {
        for (let group of category) {
          /**
           * ? create attribute, 'checked' FOR BUDGETITEM.
           * ? ex. budgetItems: [... { ...checked: true (if its tags include typeOfProduction) } ]
           */
          for (let budgetItem of group.budgetItems) {
            budgetItem.checked = budgetItem.tags.includes(typeOfProduction);
            console.log('여기', budgetItem.amnt);
            // if (!budgetItem.amnt) budgetItem.amnt = defaultAmnt;
            // if (!budgetItem.days) budgetItem.days = daysOfShooting;
            // budgetItem.amnt = !budgetItem.amnt && defaultAmnt;
            // budgetItem.days = !budgetItem.days && daysOfShooting;
          }
          /**
           * ? create attribute, 'checked' FOR GROUP.
           * ? returns func. that returns
           * ? group(ex.labor) { ...
           * ?    checked: true (if budgetItems.length > 0)
           * ? }
           */
          group.checked = function () {
            const filtered = group.budgetItems.filter(
              (budgetItem) => budgetItem.checked,
            );
            return filtered.length > 0;
          };
        }
      }
      setDataSetInstance(tempDataSetInstance);
      // setGroupsSelected(defaultGroupsSelected);
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
    dataSetInstance && console.log('데이터 세팅됨: ', dataSetInstance);
  }, [dataSetInstance]);

  const OPTIONS = {
    typeOfProduction: ['DO', 'IN', 'TV', 'TC', 'OC', 'DIY'],
    daysOfShooting: generateQt(30),
    currency: ['KRW', 'EUR', 'USD'],
    amnt: generateQt(15),
    days: generateQt(40),
  };

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

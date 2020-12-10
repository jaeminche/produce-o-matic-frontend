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

  useEffect(() => {
    // ? 3. create checked attributes for both group and budgetItems and make an INSTANCE out of the original datasets retrieved
    if (myDataSets && typeOfProduction) {
      const tempDataSetInstance = JSON.parse(JSON.stringify(myDataSets));
      // const defaultGroupsSelected = [];
      for (let [key, category] of Object.entries(tempDataSetInstance)) {
        for (let group of category) {
          /**
           * ? create attribute, checked.
           * ? ex. budgetItems: [... { ...checked: true (if its tags include typeOfProduction) } ]
           */
          for (let budgetItem of group.budgetItems) {
            budgetItem.checked = budgetItem.tags.includes(typeOfProduction);
          }
          /**
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

          // ? delete below: filter typeOfProduction and make an INSTANCE out of the original datasets retrieved
          // group.budgetItems = group.budgetItems.filter((budgetItem) =>
          //   budgetItem.tags.includes(typeOfProduction),
          // );
          // delelte below:
          // group.budgetItems.length > 0 &&
          //   defaultGroupsSelected.push(group.code);
        }
      }
      setDataSetInstance(tempDataSetInstance);
      // setGroupsSelected(defaultGroupsSelected);
    }
  }, [myDataSets, typeOfProduction]);

  useEffect(() => {
    dataSetInstance && console.log('데이터 세팅됨: ', dataSetInstance);
  }, [dataSetInstance]);

  const OPTIONS = {
    typeOfProduction: ['DO', 'IN', 'TV', 'TC', 'OC', 'DIY'],
    daysOfShooting: generateQt(30),
    currency: ['KRW', 'EUR', 'USD'],
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
      onSubmit={onSubmit}
      uiData={BUDGETOMATIC_UIDATA}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetOMaticContainer);

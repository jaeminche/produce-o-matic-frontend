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
  const [groupNames, setGroupNames] = useState();
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
    // ? 3. filter typeOfProduction and make an instance out of the original datasets retrieved
    // * will bring changes only on budgetItems layer, for Controller2 needs to use the group names unfiltered
    if (myDataSets && typeOfProduction) {
      const tempDataSetInstance = JSON.parse(JSON.stringify(myDataSets));

      for (let [key, value] of Object.entries(tempDataSetInstance)) {
        for (let group of value) {
          group.budgetItems = group.budgetItems.filter((item) =>
            item.tags.includes(typeOfProduction),
          );
        }
      }
      setDataSetInstance(tempDataSetInstance);

      // const tempDataSetInstance = Object.entries(myDataSets).map(
      //   ([key, value]) => {
      //     console.log('밸류', value);
      //     value.map((group) =>
      //       group.budgetItems.filter((item) =>
      //         item.tags.includes(typeOfProduction),
      //       ),
      //     );
      //   },
      // );
      // const _tempDataSetInstance = myDataSets.map((GROUP) => {
      //   console.log('카테고리:', GROUP.category);
      //   // * set groupNames
      //   tempMyDataSets[GROUP.category].push(GROUP);

      //   return tempMyDataSets.budgetItems.filter((item) =>
      //     item.tags.includes(typeOfProduction),
      //   );
      // });
      // setDataSetInstance(tempDataSetInstance);
      // setGroupNames(tempMyDataSets);
    }
  }, [myDataSets, typeOfProduction]);

  useEffect(() => {
    // if (dataSetInstance) {
    //   const tempMyDataSets = JSON.parse(JSON.stringify(myDataSetsTemplate));
    //   console.log('데이터셋');
    //   const initialGroupsSelected = dataSetInstance.map((group) => {
    //     const groupCode = Math.floor(group.code / 100) * 100;
    //     tempMyDataSets[group.category].push(group.name);
    //   });
    //   setGroupsSelected(initialGroupsSelected);
    // }
  }, [dataSetInstance]);

  useEffect(() => {
    dataSetInstance &&
      console.log(
        '데이터 세팅됨: ',
        dataSetInstance,
        '그룹네임즈 현재: ',
        groupNames,
      );
  }, [dataSetInstance]);

  const OPTIONS = {
    typeOfProduction: ['DO', 'IN', 'TV', 'TC', 'OC', 'DIY'],
    daysOfShooting: generateQt(30),
    currency: ['KRW', 'EUR', 'USD'],
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

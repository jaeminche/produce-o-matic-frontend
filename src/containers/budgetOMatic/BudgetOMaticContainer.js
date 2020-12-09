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
import { generateQt } from '../../lib/helper';

const BudgetOMaticContainer = ({ location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();

  const { itemsGroups, error, loading } = useSelector(
    ({ itemsGroups, loading }) => ({
      itemsGroups: itemsGroups.dataset,
      error: itemsGroups.error,
      loading: loading['itemsGroups/LIST_ITEMSGROUPS'],
    }),
  );

  // 1. request initialDataSet data and full data set
  const [initialDataSet, setInitialDataSet] = useState();
  const [typeOfProduction, setTypeOfProduction] = useState('DO');
  const [daysOfShooting, setDaysOfShooting] = useState(1);
  const [currency, setCurrency] = useState('KRW');

  const history = useHistory();

  useEffect(() => {
    dispatch(listItemsGroups());
  }, []);

  useEffect(() => {
    if (itemsGroups && typeOfProduction) {
      setInitialDataSet(
        itemsGroups.map((group) =>
          group.budgetItems.filter((item) =>
            item.tags.includes(typeOfProduction),
          ),
        ),
      );
    }
  }, [itemsGroups, typeOfProduction]);

  useEffect(() => {
    initialDataSet && console.log('셋이니셜라이즈드: ', initialDataSet);
  }, [initialDataSet]);

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

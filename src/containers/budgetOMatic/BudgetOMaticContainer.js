import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter, useHistory } from 'react-router-dom';
import BudgetOMatic from '../../components/budgetOMatic/BudgetOMatic';
import { BUDGETOMATIC_UIDATA } from '../../lib/constants/sampleBudgetomaticData';
import { generateQt } from '../../lib/helper';

const BudgetOMaticContainer = ({ location }) => {
  const [typeOfProduction, setTypeOfProduction] = useState('documentary');
  const [shootingDays, setShootingDays] = useState(1);
  const [currency, setCurrency] = useState('KRW');

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const history = useHistory();

  const OPTIONS = {
    typeOfProduction: [
      'diy',
      'documentary',
      'indie_feature',
      'tv_commercial',
      'online_commercial',
    ],
    shootingDays: generateQt(30),
    currency: ['KRW', 'EUR', 'USD'],
  };

  const onChangeTypeOfProduction = (e) => {
    console.log('onchange', e.target.value);
    setTypeOfProduction(e.target.value);
  };
  const onChangeShootingDays = (e) => {
    console.log('onchange', e.target.value);
    setShootingDays(e.target.value);
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
      shootingDays={shootingDays}
      currency={currency}
      OPTIONS={OPTIONS}
      onChangeTypeOfProduction={onChangeTypeOfProduction}
      onChangeShootingDays={onChangeShootingDays}
      onChangeCurrency={onChangeCurrency}
      onSubmit={onSubmit}
      uiData={BUDGETOMATIC_UIDATA}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetOMaticContainer);

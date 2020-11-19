import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter, useHistory } from 'react-router-dom';
import BudgetOMatic from '../../components/budgetOMatic/BudgetOMatic';
import {
  BUDGETOMATIC_UIDATA,
  _scenario,
} from '../../lib/constants/sampleBudgetomaticData';
import { generateQt } from '../../lib/helper';

const BudgetOMaticContainer = ({ location }) => {
  // 1. request scenario data and full data set
  const [scenario, setScenario] = useState(_scenario);
  const [typeOfProduction, setTypeOfProduction] = useState('documentary');
  const [daysOfShooting, setDaysOfShooting] = useState(1);
  const [currency, setCurrency] = useState('KRW');

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const history = useHistory();

  console.log('scenario', scenario[typeOfProduction], BUDGETOMATIC_UIDATA);

  useEffect(() => {
    if (scenario && typeOfProduction) {
      setDaysOfShooting(scenario[typeOfProduction].daysOfShooting);
    }
  }, [typeOfProduction]);

  const OPTIONS = {
    typeOfProduction: [
      'diy',
      'documentary',
      'indie_feature',
      'tv_feature',
      'tv_commercial',
      'online_commercial',
    ],
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

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter, useHistory } from 'react-router-dom';
import BudgetOMatic from '../../components/budgetOMatic/BudgetOMatic';
import { BUDGETOMATIC_UIDATA } from '../../lib/constants/sampleBudgetomaticData';

const BudgetOMaticContainer = ({ location }) => {
  const [typeOfProduction, setTypeOfProduction] = useState('documentary');
  const [shootingDays, setShootingDays] = useState(1);
  const [currency, setCurrency] = useState('KRW');

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const history = useHistory();

  const typeOptions = [
    'diy',
    'documentary',
    'indie_feature',
    'tv_commercial',
    'online_commercial',
  ];

  const onChangeType = (e) => {
    console.log(e.target.value);
    setTypeOfProduction(e.target.value);
  };

  return (
    <BudgetOMatic
      typeOfProduction={typeOfProduction}
      typeOptions={typeOptions}
      shootingDays={shootingDays}
      currency={currency}
      onChangeType={onChangeType}
      uiData={BUDGETOMATIC_UIDATA}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetOMaticContainer);

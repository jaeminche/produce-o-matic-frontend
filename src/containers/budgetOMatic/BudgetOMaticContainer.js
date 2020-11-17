import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter, useHistory } from 'react-router-dom';
import BudgetOMatic from '../../components/budgetOMatic/BudgetOMatic';
import { BUDGETOMATIC_UIDATA } from '../../lib/constants/sampleBudgetomaticData';

const BudgetOMaticContainer = ({ location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const history = useHistory();

  return <BudgetOMatic isMobile={isMobile} uiData={BUDGETOMATIC_UIDATA} />;
};

export default withRouter(BudgetOMaticContainer);

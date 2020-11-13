import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter, useHistory } from 'react-router-dom';
import BudgetOMatic from '../../components/budgetOMatic/BudgetOMatic';

const BudgetOMaticContainer = ({ location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const history = useHistory();

  return <BudgetOMatic isMobile={isMobile} />;
};

export default withRouter(BudgetOMaticContainer);

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { listBudgetResults } from '../../../modules/budgetResults';
import BudgetResultDetail from '../../components/BudgetResultDetail';

const BudgetResultContainer = ({ match }) => {
  const { id } = match.params;
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();
  const { BUDGETRESULTS } = useSelector(({ budgetResults }) => ({
    BUDGETRESULTS: budgetResults.budgetResults,
  }));
  const targetResult =
    BUDGETRESULTS &&
    BUDGETRESULTS.filter((result) => result._id === id).length === 1 &&
    BUDGETRESULTS.filter((result) => result._id === id)[0];

  useEffect(() => {
    if (!BUDGETRESULTS) dispatch(listBudgetResults());
  }, [BUDGETRESULTS]);

  return <BudgetResultDetail targetResult={targetResult} isMobile={isMobile} />;
};

export default withRouter(BudgetResultContainer);

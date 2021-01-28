import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listBudgetResults } from '../../../modules/budgetResults';
import BudgetResults from '../../components/BudgetResults';

const BudgetResultsContainer = () => {
  const dispatch = useDispatch();
  const { BUDGETRESULTS } = useSelector(({ budgetResults }) => ({
    BUDGETRESULTS: budgetResults.budgetResults,
  }));

  useEffect(() => {
    dispatch(listBudgetResults());
  }, []);

  return <BudgetResults budgetResults={BUDGETRESULTS} />;
};

export default withRouter(BudgetResultsContainer);

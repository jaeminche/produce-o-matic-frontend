import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listBudgetResults } from '../../../modules/budgetResults';
import BudgetResult from '../../components/BudgetResult';

const BudgetResultContainer = () => {
  const dispatch = useDispatch();
  const { BUDGETRESULTS } = useSelector(({ budgetResults }) => ({
    BUDGETRESULTS: budgetResults.budgetResults,
  }));

  useEffect(() => {
    dispatch(listBudgetResults());
  }, []);

  return <BudgetResult budgetResults={BUDGETRESULTS} />;
};

export default withRouter(BudgetResultContainer);

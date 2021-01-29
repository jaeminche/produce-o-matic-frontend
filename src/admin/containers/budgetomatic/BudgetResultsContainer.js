import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listBudgetResults } from '../../../modules/budgetResults';
import BudgetResults from '../../components/BudgetResults';

const BudgetResultsContainer = (history) => {
  const dispatch = useDispatch();
  const { BUDGETRESULTS } = useSelector(({ budgetResults }) => ({
    BUDGETRESULTS: budgetResults.budgetResults,
  }));

  useEffect(() => {
    dispatch(listBudgetResults());
  }, []);

  // const onRowClick = (e) => history.push()

  return <BudgetResults budgetResults={BUDGETRESULTS} history={history} />;
};

export default withRouter(BudgetResultsContainer);

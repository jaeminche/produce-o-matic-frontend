import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { listBudgetResults } from '../../../modules/budgetResults';
import BudgetResults from '../../components/BudgetResults';

const BudgetResultsContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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

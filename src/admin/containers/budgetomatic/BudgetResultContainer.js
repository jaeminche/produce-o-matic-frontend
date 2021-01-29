import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listBudgetResults } from '../../../modules/budgetResults';
import BudgetResult from '../../components/BudgetResult';

const BudgetResultContainer = ({ match }) => {
  const { id } = match.params;
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

  return <BudgetResult targetResult={targetResult} />;
};

export default withRouter(BudgetResultContainer);

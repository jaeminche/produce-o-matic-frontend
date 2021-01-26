import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listBudgetResults } from '../../../modules/budgetResults';

const BudgetResultsList = () => {
  console.log('==255', 'hahaha');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('==9393');
    dispatch(listBudgetResults());
  }, []);

  return <div>haha</div>;
};

export default withRouter(BudgetResultsList);

import React, { useEffect, useState } from 'react';
import BudgetResultsTable from './tables/BudgetResultsTable';

const BudgetResults = (props) => {
  //   console.log('==7979', props.budgetResults);
  return (
    <>
      <BudgetResultsTable {...props} />
    </>
  );
};

export default BudgetResults;

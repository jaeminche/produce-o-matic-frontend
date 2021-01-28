import React, { useEffect, useState } from 'react';
import Table from '../components/common/Table';

const BudgetResults = (props) => {
  //   console.log('==7979', props.budgetResults);
  return (
    <div>
      <Table {...props} />
    </div>
  );
};

export default BudgetResults;

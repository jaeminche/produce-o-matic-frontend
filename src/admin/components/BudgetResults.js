import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BudgetResults = (props) => {
  const { budgetResults } = props;
  console.log('==755', budgetResults);
  return (
    <div>
      {budgetResults && budgetResults.map((result) => <div>{result._id}</div>)}
    </div>
  );
};

export default BudgetResults;

import React, { useEffect, useState } from 'react';
import Table from '../components/common/Table';

const BudgetResult = (props) => {
  const { targetResult } = props;
  const { result, uuid, _id, createdAt_local, createdAt_utc } = targetResult;
  return <div>{/* <BudgetResult /> */}</div>;
};

export default BudgetResult;

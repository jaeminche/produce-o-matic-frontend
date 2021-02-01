import React, { useEffect, useState } from 'react';
// import Table from '../components/common/Table';
import BudgetResult from '../../components/budgetOMatic/BudgetResult';

const BudgetResultDetail = (props) => {
  const { targetResult, isMobile } = props;
  const {
    _id,
    uuid,
    createdAt,
    createdAt_local,
    createdAt_utc,
    categoryTotals,
    result,
    grandTotal,
    currency,
    currencyRate,
  } = { ...targetResult };

  return (
    <>
      {targetResult && (
        <BudgetResult
          admin
          data={result}
          categoryTotals={categoryTotals}
          currency={currency}
          currencyRate={currencyRate}
          grandTotal={grandTotal}
          isMobile={isMobile}
        />
      )}
    </>
  );
};

export default BudgetResultDetail;

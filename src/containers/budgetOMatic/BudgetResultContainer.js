import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BudgetResult from '../../components/budgetOMatic/BudgetResult';
import { initialize } from '../../modules/budgetResult';

const BudgetResultContainer = ({ history, location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();

  const {
    RES,
    data,
    categoryTotals,
    currency,
    currencyRate,
    grandTotal,
    error,
    loading,
  } = useSelector(({ budgetResult, itemsGroups, loading }) => ({
    RES: budgetResult.res,
    data: budgetResult.res && budgetResult.res.result,
    categoryTotals: budgetResult.res && budgetResult.res.categoryTotals,
    currency: budgetResult.res && budgetResult.res.currency,
    currencyRate: budgetResult.res && budgetResult.res.currencyRate,
    grandTotal: budgetResult.res && budgetResult.res.grandTotal,
    error: itemsGroups.error,
    loading: loading['itemsGroups/LIST_ITEMSGROUPS'],
  }));

  const onClickGoBack = () => {
    dispatch(initialize());
  };

  useEffect(() => {
    if (RES === null) {
      history.push({
        pathname: '/produce-o-matic/budget-o-matic/',
        state: {
          from: location.pathname,
        },
      });
    }
  }, [RES]);

  return (
    <BudgetResult
      history={history}
      onClickGoBack={onClickGoBack}
      data={data}
      categoryTotals={categoryTotals}
      currency={currency}
      currencyRate={currencyRate}
      grandTotal={grandTotal}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetResultContainer);

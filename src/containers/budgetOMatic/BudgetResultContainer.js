import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import BudgetResult from '../../components/budgetOMatic/BudgetResult';
import {
  BUDGETOMATIC_UIDATA,
  _INITIAL_CODES_SET,
} from '../../lib/constants/sampleBudgetomaticData';
import {
  OPTIONS,
  moveItemBeforeAnotherInArr,
  defaultCurrencyRates,
} from '../../lib/constants/budgetomatic';
import { listItemsGroups, postItemsGroups } from '../../modules/itemsGroups';
import { myDataSetsTemplate } from '../../lib/constants/budgetomatic';
import produce from 'immer';
import { v1 } from 'uuid';
import { postBudgetResult } from '../../modules/budgetResult';

const BudgetResultContainer = ({ history }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();

  const {
    data,
    categoryTotals,
    currency,
    currencyRate,
    grandTotal,
    error,
    loading,
  } = useSelector(({ budgetResult, itemsGroups, loading }) => ({
    data: budgetResult.res.result,
    categoryTotals: budgetResult.res.categoryTotals,
    currency: budgetResult.res.currency,
    currencyRate: budgetResult.res.currencyRate,
    grandTotal: budgetResult.res.grandTotal,
    error: itemsGroups.error,
    loading: loading['itemsGroups/LIST_ITEMSGROUPS'],
  }));

  //   TODO: 프로덕션 때 지울것
  // if (data) {
  //   sessionStorage.setItem('data', data);
  // } else {
  //   data = sessionStorage.getItem('data', data);
  // }
  // if (categoryTotals.length > 0) {
  //   sessionStorage.setItem('categoryTotals', categoryTotals);
  // } else {
  //   categoryTotals = sessionStorage.getItem('categoryTotals', categoryTotals);
  // }
  // console.log(
  //   history,
  //   '결과페이지의 데이터',
  //   data,
  //   '결과페이지의 토탈들',
  //   categoryTotals,
  // );

  return (
    <BudgetResult
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

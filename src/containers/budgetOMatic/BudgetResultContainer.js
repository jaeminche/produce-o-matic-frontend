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

const BudgetResultContainer = ({ history }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();

  const { DATASETS, error, loading } = useSelector(
    ({ itemsGroups, loading }) => ({
      DATASETS: itemsGroups.dataSets,
      error: itemsGroups.error,
      loading: loading['itemsGroups/LIST_ITEMSGROUPS'],
    }),
  );

  let { data, categoryTotals } = history.location.state;
  console.log('===888', categoryTotals);
  //   TODO: 프로덕션 때 지울것
  if (data) {
    sessionStorage.setItem('data', data);
  } else {
    data = sessionStorage.getItem('data', data);
  }
  if (categoryTotals.length > 0) {
    sessionStorage.setItem('categoryTotals', categoryTotals);
  } else {
    categoryTotals = sessionStorage.getItem('categoryTotals', categoryTotals);
  }
  console.log(
    history,
    '결과페이지의 데이터',
    data,
    '결과페이지의 토탈들',
    categoryTotals,
  );

  return (
    <BudgetResult
      data={data}
      categoryTotals={categoryTotals}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetResultContainer);

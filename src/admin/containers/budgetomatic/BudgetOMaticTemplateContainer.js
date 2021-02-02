import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { listItemsGroups } from '../../../modules/itemsGroups';
import BudgetOMaticTemplate from '../../components/BudgetOMaticTemplate';

const BudgetOMaticTemplateContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { DATASETS, error, loading } = useSelector(
    ({ itemsGroups, loading }) => ({
      DATASETS: itemsGroups.dataSets,
      error: itemsGroups.error,
      loading: loading['itemsGroups/LIST_ITEMSGROUPS'],
    }),
  );

  useEffect(() => {
    // ? 1. API request for all template data
    dispatch(listItemsGroups());
  }, []);

  return <BudgetOMaticTemplate DATASETS={DATASETS} history={history} />;
};

export default withRouter(BudgetOMaticTemplateContainer);

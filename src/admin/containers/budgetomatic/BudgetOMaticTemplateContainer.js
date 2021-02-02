import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { listItemsGroups } from '../../../modules/itemsGroups';
import BudgetOMaticTemplate from '../../components/BudgetOMaticTemplate';

const BudgetOMaticTemplateContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    IP,
    USERSLOCATION,
    CURRENCYSET,
    ipError,
    currencySetError,
    usersLocationError,

    DATASETS,
    RES,
    error,
    loading,
  } = useSelector(({ thirdPartyApis, itemsGroups, budgetResult, loading }) => ({
    IP: thirdPartyApis.ip,
    USERSLOCATION: thirdPartyApis.usersLocation,
    CURRENCYSET: thirdPartyApis.currencySet,
    currencySetError: thirdPartyApis.currencySetError,
    ipError: thirdPartyApis.ipError,
    usersLocationError: thirdPartyApis.usersLocationError,

    DATASETS: itemsGroups.dataSets,
    RES: budgetResult.res,
    error: itemsGroups.error,
    loading: loading['itemsGroups/LIST_ITEMSGROUPS'],
  }));

  useEffect(() => {
    // ? 1. API request for all template data
    dispatch(listItemsGroups());
  }, []);

  return <BudgetOMaticTemplate DATASETS={DATASETS} history={history} />;
};

export default withRouter(BudgetOMaticTemplateContainer);

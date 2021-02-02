import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { listItemsGroups } from '../../../modules/itemsGroups';
import BudgetOMaticTemplateGroup from '../../components/BudgetOMaticTemplateGroup';

const BudgetOMaticTemplateGroupContainer = ({ match }) => {
  const { id } = match.params;
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();
  const { DATASETS, error, loading } = useSelector(
    ({ itemsGroups, loading }) => ({
      DATASETS: itemsGroups.dataSets,
      error: itemsGroups.error,
      loading: loading['itemsGroups/LIST_ITEMSGROUPS'],
    }),
  );
  const targetGroup =
    DATASETS &&
    DATASETS.filter((group) => group._id === id).length === 1 &&
    DATASETS.filter((group) => group._id === id)[0];

  useEffect(() => {
    if (!DATASETS) dispatch(listItemsGroups());
  }, [DATASETS]);

  return (
    <BudgetOMaticTemplateGroup targetGroup={targetGroup} isMobile={isMobile} />
  );
};

export default withRouter(BudgetOMaticTemplateGroupContainer);

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { listItemsGroups } from '../../../modules/itemsGroups';
import BudgetOMaticTemplateAddGroup from '../../components/BudgetOMaticTemplateAddGroup';

const BudgetOMaticTemplateAddGroupContainer = ({ match, history }) => {
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
  let nextTargetGroupIndex;
  const targetGroup =
    DATASETS &&
    DATASETS.filter((group, index) => {
      if (group._id === id) nextTargetGroupIndex = index + 1;
      return group._id === id;
    })[0];
  const nextTargetGroupCode =
    DATASETS &&
    nextTargetGroupIndex !== undefined &&
    DATASETS[nextTargetGroupIndex] &&
    DATASETS[nextTargetGroupIndex].code;

  useEffect(() => {
    if (!DATASETS) dispatch(listItemsGroups());
    // if (!DATASETS) history.goBack();
  }, [DATASETS]);
  console.log('==2345');
  return (
    <BudgetOMaticTemplateAddGroup
      targetGroup={targetGroup}
      //   itemCodesTaken={itemCodesTaken}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetOMaticTemplateAddGroupContainer);

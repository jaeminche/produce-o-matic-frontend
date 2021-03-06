import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { listItemsGroups } from '../../../modules/itemsGroups';
import BudgetOMaticTemplate from '../../components/BudgetOMaticTemplate';
import { myToast } from '../../../lib/util/myToast';

const BudgetOMaticTemplateContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [activeItem, setActiveItem] = useState({
    groupCode: null,
    key: null,
    open: false,
  });
  const { DATASETS, error, loading } = useSelector(
    ({ itemsGroups, loading }) => ({
      DATASETS: itemsGroups.dataSets,
      error: itemsGroups.error,
      loading: loading['itemsGroups/LIST_ITEMSGROUPS'],
    }),
  );
  const toggleUpdateItem = (groupCode, index) => {
    setActiveItem({ groupCode, key: index, open: !activeItem.open });
  };

  useEffect(() => {
    // ? 1. API request for all template data
    dispatch(listItemsGroups());
  }, []);

  useEffect(() => {
    if (error) myToast('Something went wrong. Consult your developer');
  }, [error]);
  return (
    <BudgetOMaticTemplate
      DATASETS={DATASETS}
      activeItem={activeItem}
      setActiveItem={setActiveItem}
      toggleUpdateItem={toggleUpdateItem}
      history={history}
    />
  );
};

export default withRouter(BudgetOMaticTemplateContainer);

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { listItemsGroups } from '../../../modules/itemsGroups';
import BudgetOMaticTemplate from '../../components/BudgetOMaticTemplate';

const BudgetOMaticTemplateContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [activeItem, setActiveItem] = useState({ key: 0, open: false });
  const { DATASETS, error, loading } = useSelector(
    ({ itemsGroups, loading }) => ({
      DATASETS: itemsGroups.dataSets,
      error: itemsGroups.error,
      loading: loading['itemsGroups/LIST_ITEMSGROUPS'],
    }),
  );
  const toggleUpdateItem = (index) => {
    // const { index, key } = e.target || e;
    console.log('==4498', index);
    setActiveItem({ key: index, open: !activeItem.open });
  };

  useEffect(() => {
    // ? 1. API request for all template data
    dispatch(listItemsGroups());
  }, []);

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

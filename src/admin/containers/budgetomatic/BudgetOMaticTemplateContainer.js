import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { listItemsGroups } from '../../../modules/itemsGroups';
import { initializeForm, updateGroup } from '../../../modules/admin';
import BudgetOMaticTemplate from '../../components/BudgetOMaticTemplate';
import { myToast } from '../../../lib/util/myToast';

const BudgetOMaticTemplateContainer = () => {
  // todo: 나중에 categories update 할 때 참고.
  //   categories 를 지우려면, 소속 그룹들이 전부 없는지 확인(some). ('해당 카테고리에 소속되어 있는 그룹들 전부 삭제하고 다시 시도하세요')

  // categories.groupsCodes 어레이에서 그룹을 지우려면, 해당 그룹이 없어야 함. ('해당 그룹을 삭제하고 다시 시도하세요')

  const dispatch = useDispatch();
  const history = useHistory();
  const [details, setDetails] = useState([]);
  const [activeGroup, setActiveGroup] = useState({
    code: null,
    name: '',
    category: null,
    budgetItems: null,
    _id: null,
    open: false,
  });
  const [activeItem, setActiveItem] = useState({
    groupCode: null,
    key: null,
    open: false,
  });
  const { DATASETS, error, formUpdateGroup, loading } = useSelector(
    ({ itemsGroups, admin, loading }) => ({
      DATASETS: itemsGroups.dataSets,
      error: itemsGroups.error,
      formUpdateGroup: admin.updateGroup,
      loading: loading['itemsGroups/LIST_ITEMSGROUPS'],
    }),
  );

  // *=== MODIFY GROUP starts ===
  const toggleUpdateGroup = (group) => {
    if (activeItem && activeItem.open) toggleUpdateItem(activeItem);
    setActiveGroup({ ...group, open: !activeGroup.open });
  };

  useEffect(() => {
    if (activeGroup && activeGroup.open) {
    } else {
      dispatch(initializeForm('updateGroup'));
    }
  }, [activeGroup]);

  // *=== MODIFY ITEMS start ===
  const toggleUpdateItem = (groupCode, index) => {
    console.log('==1929', activeGroup);
    if (activeGroup && activeGroup.open) toggleUpdateGroup(activeGroup);
    setActiveItem({ groupCode, key: index, open: !activeItem.open });
  };

  useEffect(() => {
    // ? 1. API request for all template data
    dispatch(listItemsGroups());
  }, []);

  //  *=== ERROR HANDLINGS ===
  useEffect(() => {
    if (error) myToast('Something went wrong. Consult your developer');
  }, [error]);
  return (
    <BudgetOMaticTemplate
      DATASETS={DATASETS}
      details={details}
      setDetails={setDetails}
      activeGroup={activeGroup}
      setActiveGroup={setActiveGroup}
      toggleUpdateGroup={toggleUpdateGroup}
      activeItem={activeItem}
      toggleUpdateItem={toggleUpdateItem}
      history={history}
    />
  );
};

export default withRouter(BudgetOMaticTemplateContainer);

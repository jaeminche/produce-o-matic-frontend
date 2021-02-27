import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import produce from 'immer';
import { listItemsGroups } from '../../../modules/itemsGroups';
import {
  changeField,
  initializeForm,
  listCategories,
  addGroup,
  addItem,
  addCategory,
  updateGroup,
  updateItem,
  updateCategory,
} from '../../../modules/admin';
import BudgetOMaticTemplateModify from '../../components/BudgetOMaticTemplateModify';
import { myToast } from '../../../lib/util/myToast';
import FormGroups from '../../components/common/FormGroups';

const BudgetOMaticTemplateModifyContainer = ({
  match,
  history,
  modifyType = 'add',
  groupCode,
  updateItemTarget,
  updateItemBtnClicked,
  toggleUpdateItem,
  children,
}) => {
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(2);
  const dispatch = useDispatch();
  const [filteredCategory, setFilteredCategory] = useState('');
  const [availItemsCodes, setAvailItemsCodes] = useState(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const activeText = ['Category', 'Group', 'Item'];
  const [formUpdateItem, setFormUpdateItem] = useState(updateItemTarget);
  // const formUpdateItemInput = React.useRef(null);
  // useEffect(() => {
  //   formUpdateItem.current.focus();
  // }, [formUpdateItem]);

  useEffect(() => {
    console.log('==6699', formUpdateItem);
  }, [formUpdateItem]);
  const {
    itemsGroups,
    formAddCategory,
    formAddGroup,
    formAddItem,
    formUpdateCategory,
    formUpdateGroup,
    selectedGroup,
    selectedCategory,
    categoriesList,
    addCategorySubmitted,
    addGroupSubmitted,
    addItemSubmitted,
    addCategoryError,
    addGroupError,
    addItemError,

    updateCategorySubmitted,
    updateGroupSubmitted,
    updateItemSubmitted,
    updateCategoryError,
    updateGroupError,
    updateItemError,
    listCategoriesError,
  } = useSelector(({ admin, itemsGroups }) => ({
    itemsGroups: itemsGroups.dataSets,
    formAddCategory: admin.addCategory,
    formAddGroup: admin.addGroup,
    formAddItem: admin.addItem,
    formUpdateCategory: admin.updateCategory,
    formUpdateGroup: admin.updateGroup,
    selectedGroup:
      modifyType === 'update' ? groupCode : admin.addItem.selectedGroup,
    selectedCategory: admin.addGroup.category || admin.updateGroup.category,
    categoriesList: admin.listCategories,
    addCategorySubmitted: admin.addCategorySubmitted,
    addGroupSubmitted: admin.addGroupSubmitted,
    addItemSubmitted: admin.addItemSubmitted,
    updateCategorySubmitted: admin.updateCategorySubmitted,
    updateGroupSubmitted: admin.updateGroupSubmitted,
    updateItemSubmitted: admin.updateItemSubmitted,

    itemsGroupsError: itemsGroups.error,
    addCategoryError: admin.addCategoryError,
    addGroupError: admin.addGroupError,
    addItemError: admin.addItemError,
    updateCategoryError: admin.updateCategoryError,
    updateGroupError: admin.updateGroupError,
    updateItemError: admin.updateItemError,
    listCategoriesError: admin.listCategoriesError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log('==622', value, name);
    if (modifyType === 'add') {
      dispatch(
        changeField({
          form: `${modifyType}${activeText[activeTab]}`,
          key: name,
          value,
        }),
      );
    } else if (modifyType === 'update') {
      if (activeTab === 2) {
        const baseState = { ...formUpdateItem };
        const nextState = produce(baseState, (draftState) => {
          draftState[name] = value;
        });
        console.log('==0001', e, e.target);
        console.log('==0002', nextState);

        setFormUpdateItem(nextState);
      }
    }
  };

  const handleOnSelect = ({ e, key, isMulti = false }) => {
    // if e is like [{label: str, value: num}], make it flat only with values
    const structuredValues = isMulti
      ? (key === 'groupsCodes' || key === 'tags') && e.map((obj) => obj.value)
      : e.value;

    dispatch(
      changeField({
        form: `${modifyType}${activeText[activeTab]}`,
        key,
        value: structuredValues,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('==779', e, activeTab, formAddCategory);
    if (modifyType === 'add') {
      if (activeTab === 2) {
        const rates = [];
        const { code, name, unit, rate, remark, tags } = formAddItem;
        rates.push(Number(rate));
        dispatch(addItem({ code, name, unit, rate: rates, remark, tags }));
      } else if (activeTab === 1) {
        const { code, name, category } = formAddGroup;
        dispatch(addGroup({ code, name, category }));
      } else if (activeTab === 0) {
        const { name, groupsCodes } = formAddCategory;
        dispatch(addCategory({ name, groupsCodes }));
      }
    } else if (modifyType === 'update') {
      if (activeTab === 2) {
        const rates = [];
        const { code, name, unit, rate, remark, tags } = formUpdateItem;
        typeof rate === 'string'
          ? rates.push(Number(rate))
          : rates.push(Number(rate[0]));
        dispatch(updateItem({ code, name, unit, rate: rates, remark, tags }));
      } else if (activeTab === 1) {
        const { code, name, category } = formAddGroup;
        dispatch(updateGroup({ code, name, category }));
      } else if (activeTab === 0) {
        const { name, groupsCodes } = formAddCategory;
        dispatch(updateCategory({ name, groupsCodes }));
      }
    }
  };

  useEffect(() => {
    // * 페이지 초기 로드나, add 페이지에서 사용자가 activeTab을 선택할 때마다 모든 폼 초기화
    dispatch(initializeForm('addCategory'));
    dispatch(initializeForm('addGroup'));
    dispatch(initializeForm('addItem'));
    dispatch(initializeForm('updateCategory'));
    dispatch(initializeForm('updateGroup'));
    dispatch(initializeForm('updateItem'));
    if (activeTab === 2 || activeTab === 1) {
      dispatch(listItemsGroups());
    }
    if (activeTab === 1 || activeTab === 0) {
      dispatch(listCategories());
    }
  }, [activeTab]);

  useEffect(() => {
    if (categoriesList && selectedCategory)
      setFilteredCategory(
        categoriesList.filter((list) => list.name === selectedCategory)[0],
      );
  }, [categoriesList, selectedCategory]);

  useEffect(() => {
    // * add 페이지에서 사용자가 add할 아이템의 소속 그룹을 선택하거나, 아이템 update 버튼을 누르면, availItemsCodes를 설정한다.
    if (selectedGroup && itemsGroups) {
      const itemsCodesTaken =
        itemsGroups &&
        itemsGroups
          .filter((group) => group.code === selectedGroup)[0]
          .budgetItems.map((item) => item.code);

      const generateAllItemsCodes = ({ baseNum }) => {
        const elem = [];
        for (let i = baseNum + 1; i < baseNum + 100; i++) {
          elem.push(i);
        }
        return modifyType === 'update'
          ? elem.filter(
              (code) =>
                !itemsCodesTaken.includes(code) ||
                code === updateItemTarget.code,
            )
          : elem.filter((code) => !itemsCodesTaken.includes(code));
      };
      const _availItemsCodes =
        itemsCodesTaken && generateAllItemsCodes({ baseNum: selectedGroup });
      setAvailItemsCodes(_availItemsCodes);
    }
  }, [selectedGroup]);

  // useEffect(() => {
  //   // * 아이템 update를 클릭했을 때, 기존값을 초기값으로 설정
  //   if (updateItemTarget) {
  //     // ?destructure rate
  //     updateItemTarget.rate = updateItemTarget.rate[0];
  //     setFormUpdateItem(updateItemTarget);
  //   }
  // }, [updateItemTarget]);

  // useEffect(() => {
  //   // console.log('==3920', formUpdateItem);
  //   formUpdateItem && formUpdateItem.current.focus();
  // }, [formUpdateItem]);

  useEffect(() => {
    if (addCategorySubmitted) {
      myToast('저장되었습니다');
      dispatch(initializeForm('addCategory'));
    }
  }, [addCategorySubmitted]);

  return (
    <BudgetOMaticTemplateModify
      // formUpdateItemInput={formUpdateItemInput}
      updateItemBtnClicked={updateItemBtnClicked}
      toggleUpdateItem={toggleUpdateItem}
      modifyType={modifyType}
      groupCode={groupCode}
      updateItemTarget={updateItemTarget}
      children={children}
      activeText={activeText}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      form={
        modifyType === 'add'
          ? activeTab === 2
            ? formAddItem
            : activeTab === 1
            ? formAddGroup
            : formAddCategory
          : formUpdateItem
      }
      categoriesList={categoriesList}
      filteredCategory={filteredCategory}
      itemsGroups={itemsGroups}
      onChange={onChange}
      handleOnSelect={handleOnSelect}
      availItemsCodes={availItemsCodes}
      onSubmit={onSubmit}
      addCategorySubmitted={!!addCategorySubmitted}
      error={error}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetOMaticTemplateModifyContainer);

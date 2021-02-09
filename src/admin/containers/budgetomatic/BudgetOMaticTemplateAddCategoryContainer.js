import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { listItemsGroups } from '../../../modules/itemsGroups';
import {
  changeField,
  initializeForm,
  listCategories,
  addGroup,
  addItem,
  addCategory,
} from '../../../modules/admin';
import BudgetOMaticTemplateAddCategory from '../../components/BudgetOMaticTemplateAddCategory';
import { myToast } from '../../../lib/util/myToast';

const BudgetOMaticTemplateAddCategoryContainer = ({ match, history }) => {
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(2);
  const dispatch = useDispatch();
  const [filteredCategory, setFilteredCategory] = useState('');
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const activeText = ['Category', 'Group', 'Item'];

  const {
    itemsGroups,
    categoryForm,
    groupForm,
    itemForm,
    selectedCategory,
    categoriesList,
    addCategorySubmitted,
    addGroupSubmitted,
    addItemSubmitted,
    addCategoryError,
    addGroupError,
    addItemError,
    listCategoriesError,
  } = useSelector(({ admin, itemsGroups }) => ({
    itemsGroups: itemsGroups.dataSets,
    categoryForm: admin.addCategory,
    groupForm: admin.addGroup,
    itemForm: admin.addItem,
    selectedCategory: admin.addGroup.category,
    categoriesList: admin.listCategories,
    addCategorySubmitted: admin.addCategorySubmitted,
    addGroupSubmitted: admin.addGroupSubmitted,
    addItemSubmitted: admin.addItemSubmitted,

    itemsGroupsError: itemsGroups.error,
    addCategoryError: admin.addCategoryError,
    addGroupError: admin.addGroupError,
    addItemError: admin.addItemError,
    listCategoriesError: admin.listCategoriesError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: `add${activeText[activeTab]}`,
        key: name,
        value,
      }),
    );
  };

  const handleOnSelect = ({ e, key, isMulti = false }) => {
    // if e is like [{label: str, value: num}], make it flat only with values
    const structuredValues = isMulti
      ? key === 'groupsCodes' && e.map((obj) => obj.value)
      : e.value;
    dispatch(
      changeField({
        form: `add${activeText[activeTab]}`,
        key,
        value: structuredValues,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('==779', e, activeTab, categoryForm);
    if (activeTab === 2) {
      const { code, name, unit, rate, remark, tags } = itemForm;
      dispatch(addItem({ code, name, unit, rate, remark, tags }));
    } else if (activeTab === 1) {
      const { code, name, category } = groupForm;
      dispatch(addGroup({ code, name, category }));
    } else if (activeTab === 0) {
      const { name, groupsCodes } = categoryForm;
      dispatch(addCategory({ name, groupsCodes }));
    }
  };

  useEffect(() => {
    dispatch(initializeForm('addCategory'));
    dispatch(initializeForm('addGroup'));
    dispatch(initializeForm('addItem'));
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
    if (addCategorySubmitted) {
      myToast('저장되었습니다');
      dispatch(initializeForm('addCategory'));
    }
  }, [addCategorySubmitted]);

  return (
    <BudgetOMaticTemplateAddCategory
      activeText={activeText}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      form={
        activeTab === 2 ? itemForm : activeTab === 1 ? groupForm : categoryForm
      }
      categoriesList={categoriesList}
      filteredCategory={filteredCategory}
      itemsGroups={itemsGroups}
      onChange={onChange}
      handleOnSelect={handleOnSelect}
      onSubmit={onSubmit}
      addCategorySubmitted={!!addCategorySubmitted}
      error={error}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetOMaticTemplateAddCategoryContainer);

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

const BudgetOMaticTemplateAddCategoryContainer = ({ match, history }) => {
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(2);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const activeText = ['Category', 'Group', 'Item'];

  const {
    categoryForm,
    groupForm,
    itemForm,
    categoriesList,
    addCategorySubmitted,
    addGroupSubmitted,
    addItemSubmitted,
    addCategoryError,
    addGroupError,
    addItemError,
    listCategoriesError,
  } = useSelector(({ admin }) => ({
    categoryForm: admin.addCategory,
    groupForm: admin.addGroup,
    itemForm: admin.addItem,
    categoriesList: admin.listCategories,
    addCategorySubmitted: admin.addCategorySubmitted,
    addGroupSubmitted: admin.addGroupSubmitted,
    addItemSubmitted: admin.addItemSubmitted,
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
    const destructured = isMulti
      ? key === 'groupsCodes' && e.map((obj) => obj.value)
      : e;
    dispatch(
      changeField({
        form: `add${activeText[activeTab]}`,
        key,
        value: destructured,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
    dispatch(listCategories());
  }, [dispatch]);

  // useEffect(() => {
  //   if (authError) {
  //     console.log('오류 발생');
  //     console.log(authError);
  //     setError('login failed');
  //     return;
  //   }
  //   if (auth) {
  //     console.log('로그인 성공');
  //     dispatch(check());
  //   }
  // }, [auth, authError, dispatch]);

  return (
    <BudgetOMaticTemplateAddCategory
      activeText={activeText}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      form={
        activeTab === 2 ? itemForm : activeTab === 1 ? groupForm : categoryForm
      }
      categoriesList={categoriesList}
      onChange={onChange}
      handleOnSelect={handleOnSelect}
      onSubmit={onSubmit}
      error={error}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetOMaticTemplateAddCategoryContainer);

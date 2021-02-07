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
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [tab, setTab] = useState('');
  const {
    categoryForm,
    groupForm,
    itemForm,
    listCategories,
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
    listCategories: admin.listCategories,
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
        form: `add${tab.charAt(0).toUpperCase()}`,
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (tab === 'item') {
      const { code, name, unit, rate, remark, tags } = itemForm;
      dispatch(addItem({ code, name, unit, rate, remark, tags }));
    } else if (tab === 'group') {
      const { code, name, category } = groupForm;
      dispatch(addGroup({ code, name, category }));
    } else if (tab === 'category') {
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
      tab={tab}
      setTab={setTab}
      form={itemForm || groupForm || categoryForm}
      listCategories={listCategories}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetOMaticTemplateAddCategoryContainer);

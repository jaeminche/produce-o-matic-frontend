import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { listItemsGroups } from '../../../modules/itemsGroups';
import {
  changeField,
  initializeForm,
  addCategory,
  addItem,
} from '../../../modules/admin';
import BudgetOMaticTemplateAddCategory from '../../components/BudgetOMaticTemplateAddCategory';

const BudgetOMaticTemplateAddCategoryContainer = ({ match, history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { form, admin, authError, user } = useSelector(({ admin }) => ({
    form: admin,
    admin: admin.auth,
    authError: admin.authError,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'addCategory',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { code, name, category } = form;
    // dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('addCategory'));
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
      //   itemCodesTaken={itemCodesTaken}
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetOMaticTemplateAddCategoryContainer);

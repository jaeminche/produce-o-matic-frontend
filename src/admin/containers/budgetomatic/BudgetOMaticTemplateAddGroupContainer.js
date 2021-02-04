import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { listItemsGroups } from '../../../modules/itemsGroups';
import {
  changeField,
  initializeForm,
  addGroup,
  addItem,
} from '../../../modules/admin';
import BudgetOMaticTemplateAddGroup from '../../components/BudgetOMaticTemplateAddGroup';

const BudgetOMaticTemplateAddGroupContainer = ({ match, history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { form, admin, authError, user } = useSelector(({ admin }) => ({
    form: admin,
    admin: admin.auth,
    authError: admin.authError,
  }));
  // let nextTargetGroupIndex;
  // const targetGroup =
  //   DATASETS &&
  //   DATASETS.filter((group, index) => {
  //     if (group._id === id) nextTargetGroupIndex = index + 1;
  //     return group._id === id;
  //   })[0];
  // const nextTargetGroupCode =
  //   DATASETS &&
  //   nextTargetGroupIndex !== undefined &&
  //   DATASETS[nextTargetGroupIndex] &&
  //   DATASETS[nextTargetGroupIndex].code;

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'addGroup',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    // dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
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
    <BudgetOMaticTemplateAddGroup
      //   itemCodesTaken={itemCodesTaken}
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      isMobile={isMobile}
    />
  );
};

export default withRouter(BudgetOMaticTemplateAddGroupContainer);

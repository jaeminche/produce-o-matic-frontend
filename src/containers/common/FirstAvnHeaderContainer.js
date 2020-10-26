import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FirstAvnHeader from '../../components/common/FirstAvnHeader';
import { logout } from '../../modules/user';

const FirstAvnHeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <FirstAvnHeader user={user} onLogout={onLogout} />;
};

export default FirstAvnHeaderContainer;

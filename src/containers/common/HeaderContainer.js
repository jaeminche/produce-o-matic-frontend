import React from 'react';
import Header from '../../components/common/Header';
import { menus } from '../../lib/constants/bars';

const HeaderContainer = () => {
  return <Header menus={menus} />;
};

export default HeaderContainer;

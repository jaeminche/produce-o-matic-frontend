import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/common/Header';
import { menus } from '../../lib/constants/bars';

const HeaderContainer = ({ location }) => {
  // ? will give header a fixed position only on MainPage
  const isFixed = location.pathname === '/';
  const activeMenu = location.pathname.split('/')[1];
  return <Header menus={menus} isFixed={isFixed} activeMenu={activeMenu} />;
};

export default withRouter(HeaderContainer);

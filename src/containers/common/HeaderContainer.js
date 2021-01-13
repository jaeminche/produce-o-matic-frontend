import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/common/Header';
import { menus } from '../../lib/constants/bars';
import { useMediaQuery } from 'react-responsive';

const HeaderContainer = ({ location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // ? will give Header a fixed position only on MainPage.
  const isFixed = location.pathname === '/';
  // const isFixed = isMobile && !location.pathname.includes('general-knowledge') ? true : location.pathname === '/';
  const activeMenu = location.pathname.split('/')[1];
  const activeSubMenu = location.pathname.split('/')[2];

  return (
    <Header
      menus={menus}
      isFixed={isFixed}
      activeMenu={activeMenu}
      activeSubMenu={activeSubMenu}
      isMobile={isMobile}
    />
  );
};

export default withRouter(HeaderContainer);

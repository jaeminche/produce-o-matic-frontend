import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/common/Header';
import { menus } from '../../lib/constants/bars';
import { useMediaQuery } from 'react-responsive';

const HeaderContainer = ({ location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // ? will give header a fixed position only on MainPage on desktop, always on mobile
  const isFixed =
    isMobile && !location.pathname.includes('general-knowledge')
      ? true
      : location.pathname === '/';
  // const isFixed = true;
  const activeMenu = location.pathname.split('/')[1];
  const activeSubMenu = location.pathname.split('/')[2];

  console.log('액티브메뉴', activeMenu, activeSubMenu);
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

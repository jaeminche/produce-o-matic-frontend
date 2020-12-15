import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/common/Header';
import { menus } from '../../lib/constants/bars';
import { useMediaQuery } from 'react-responsive';

const HeaderContainer = ({ location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // ? will give header a fixed position only on MainPage on desktop, always on mobile
  const isFixed = isMobile ? true : location.pathname === '/';
  // const isFixed = true;
  const activeMenu = location.pathname.split('/')[1];
  return (
    <Header
      menus={menus}
      isFixed={isFixed}
      activeMenu={activeMenu}
      isMobile={isMobile}
    />
  );
};

export default withRouter(HeaderContainer);

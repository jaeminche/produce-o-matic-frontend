import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import SubHeader from '../../components/common/SubHeader';
import { menus } from '../../lib/constants/bars';

const SubHeaderContainer = ({ location, menuIndex }) => {
  // const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const submenus = menus[menuIndex].submenus;
  const activeSubMenu = location.pathname.split('/')[2];
  return <SubHeader submenus={submenus} activeSubMenu={activeSubMenu} />;
};

export default withRouter(SubHeaderContainer);

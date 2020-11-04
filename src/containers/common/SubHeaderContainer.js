import React from 'react';
import { withRouter } from 'react-router-dom';
import SubHeader from '../../components/common/SubHeader';
import { menus } from '../../lib/constants/bars';

const SubHeaderContainer = ({ location, menuIndex }) => {
  const submenus = menus[menuIndex].submenus;
  const { pathname } = location;
  return <SubHeader submenus={submenus} pathname={pathname} />;
};

export default withRouter(SubHeaderContainer);

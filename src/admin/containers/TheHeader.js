import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink,
  CImg,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

// routes config
import routes from '../routes';

import {
  TheHeaderDropdown,
  // TheHeaderDropdownMssg,
  // TheHeaderDropdownNotif,
  // TheHeaderDropdownTasks,
} from './index';

import { LOGO1ROW } from '../../assets';
import { toggleAdminSide } from '../../modules/main';

const TheHeader = () => {
  const dispatch = useDispatch();
  const { sidebarShow, user } = useSelector(({ main, user }) => ({
    sidebarShow: main.sidebarShow,
    user: user.user,
  }));

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow)
      ? false
      : 'responsive';
    dispatch(toggleAdminSide({ data: val }));
  };

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow)
      ? true
      : 'responsive';
    dispatch(toggleAdminSide({ data: val }));
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/firstavenue/">
        {/* <CIcon name="logo" height="48" alt="Logo" /> */}
        <CImg
          src={LOGO1ROW}
          className="c-sidebar-brand-full"
          alt="produce-o-matic logo"
        />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          {/* <CHeaderNavLink to="/firstavenue/dashboard">Dashboard</CHeaderNavLink> */}
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          {/* <CHeaderNavLink to="/firstavenue/users">Users</CHeaderNavLink> */}
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          {/* <CHeaderNavLink>Settings</CHeaderNavLink> */}
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        {/* <TheHeaderDropdownNotif />
        <TheHeaderDropdownTasks />
        <TheHeaderDropdownMssg /> */}
        <TheHeaderDropdown username={user.username} />
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={routes}
        />
        <div className="d-md-down-none mfe-2 c-subheader-nav">
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-speech" alt="Settings" />
          </CLink>
        </div>
      </CSubheader>
    </CHeader>
  );
};

export default TheHeader;

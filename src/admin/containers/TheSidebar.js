import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

// sidebar nav config
import navigation from './_nav';

import { LOGO1ROW } from '../../assets';
import { toggleAdminSide } from '../../modules/main';

const TheSidebar = () => {
  const dispatch = useDispatch();
  const { show } = useSelector(({ main }) => ({
    show: main.sidebarShow,
  }));
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch(toggleAdminSide({ data: val }))}
    >
      <CSidebarBrand className="d-md-down-none" to="/firstavenue">
        <CImg
          src={LOGO1ROW}
          className="c-sidebar-brand-full"
          style={{ filter: 'invert(1)' }}
          alt="produce-o-matic logo"
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);

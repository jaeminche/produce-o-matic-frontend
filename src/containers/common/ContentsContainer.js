import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter, useParams, useHistory } from 'react-router-dom';
import { uiData } from '../../lib/constants/uiData';
import Contents from '../../components/common/Contents';

const ContentsContainer = ({ pagekey, location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const history = useHistory();
  const { active_tab } = useParams();

  const DEFAULT_ACTIVE_TAB = 'korea';
  const { pathname } = location;

  // ? set rows for ui data, tabRows as well if any
  const { rows, tabRows } = uiData[pagekey];

  const _tabRows = tabRows && tabRows[active_tab];

  useEffect(() => {
    if (tabRows && !active_tab) {
      history.push(`${pathname}/${DEFAULT_ACTIVE_TAB}`);
    }
  }, []);

  const toggleTabs = (tab) => {
    if (active_tab !== tab) {
      history.push(`${pathname}/${tab}`);
    }
  };

  return (
    <Contents
      rows={rows}
      tabRows={_tabRows}
      toggleTabs={tabRows && toggleTabs}
      isMobile={isMobile}
    />
  );
};

export default withRouter(ContentsContainer);

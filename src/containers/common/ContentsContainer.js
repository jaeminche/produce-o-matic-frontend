import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { uiData } from '../../lib/constants/uiData';
import Contents from '../../components/common/Contents';

const ContentsContainer = ({ location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const { pathname } = location;
  const _uiData = dataRouter(pathname);

  function dataRouter(path) {
    switch (path) {
      case '/produce-in-korea/location-incentives':
        return uiData['locationIncentives'];
      case '/produce-in-korea/general-knowledge':
        return uiData['generalKnowledge'];
      default:
    }
  }

  return <Contents uiData={_uiData} isMobile={isMobile} />;
};

export default withRouter(ContentsContainer);

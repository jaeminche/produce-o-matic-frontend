import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { uiData } from '../../lib/constants/summaryInKorea';
import Summary from '../../components/common/Summary';
const SummaryContainer = ({ location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const { pathname } = location;
  const _uiData = dataRouter(pathname);

  function dataRouter(path) {
    switch (path) {
      case '/produce-in-korea/summary':
        return uiData['summaryInKorea'];
      case '/produce-o-manual/summary':
        return uiData['summaryOManual'];
      case '/produce-o-matic/summary':
        return uiData['summaryOMatic'];
      case '/produce-o-people/summary':
        return uiData['summaryOPeople'];
      default:
    }
  }

  //   const sections = drawSections(uiData);

  //   function drawSections(data) {
  //     const { uiType, parent, title, text, titleImage, flexBox } = data;

  //     switch (parent) {
  //       case 'produce-in-korea':
  //         return [title, text, titleImage, flexBox];
  //       default:
  //     }
  //   }

  return <Summary uiData={_uiData} isMobile={isMobile} />;
};

export default withRouter(SummaryContainer);

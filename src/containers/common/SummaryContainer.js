import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { uiData_summaryInKorea } from '../../lib/constants/summaryInKorea';
import Summary from '../../components/common/Summary';
const SummaryContainer = ({ location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const { pathname } = location;
  let uiData = dataRouter(pathname);

  function dataRouter(path) {
    switch (path) {
      case '/produce-in-korea/summary':
        return uiData_summaryInKorea;
      //   case '/produce-in-korea/summary':
      //     return uiData_summaryInKorea;
      //   case '/produce-in-korea/summary':
      //     return uiData_summaryInKorea;
      //   case '/produce-in-korea/summary':
      //     return uiData_summaryInKorea;
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

  return <Summary uiData={uiData} isMobile={isMobile} />;
};

export default withRouter(SummaryContainer);

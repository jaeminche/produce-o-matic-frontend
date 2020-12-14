import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { uiData } from '../../lib/constants/summaryInKorea';
import PopularLocation from '../../components/produceInKorea/PopularLocation';
import SAMPLEYOUTUBES from '../../lib/constants/sampleYoutubes';

const PopularLocationContainer = ({ location, match, history }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [data, setData] = useState(false);
  const { pathname } = location;
  console.log('history', history);
  const { id } = match.params;

  const _uiData = dataRouter(pathname);

  function dataRouter(path) {
    switch (path) {
      case '/produce-in-korea':
        return uiData['summaryInKorea'];
      case '/produce-o-manual':
        return uiData['summaryOManual'];
      case '/produce-o-matic':
        return uiData['summaryOMatic'];
      case '/produce-o-people':
        return uiData['summaryOPeople'];
      default:
    }
  }

  useEffect(() => {
    // GET url
    id && setData(SAMPLEYOUTUBES[id - 1]);
  }, [id]);

  return <PopularLocation data={data} history={history} isMobile={isMobile} />;
};

export default withRouter(PopularLocationContainer);

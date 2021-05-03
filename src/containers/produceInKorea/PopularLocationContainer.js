import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { uiData } from '../../lib/constants/summaryInKorea';
import PopularLocation from '../../components/produceInKorea/PopularLocation';
import { listPopularLocations } from '../../modules/popularLocations';

const PopularLocationContainer = ({ location, match, history }) => {
  const { popularLocations, error, loading } = useSelector(
    ({ popularLocations, loading, user }) => ({
      popularLocations: popularLocations.popularLocations,
      error: popularLocations.error,
      loading: loading['popularLocations/LIST_POPULARLOCATIONS'],
    }),
  );
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const { pathname } = location;
  const { id } = match.params;

  const [data, setData] = useState(
    popularLocations &&
      popularLocations.filter((location) => location._id === id)[0],
  );

  useEffect(() => {
    if (!popularLocations) {
      dispatch(listPopularLocations());
    } else {
      !data &&
        setData(popularLocations.filter((location) => location._id === id)[0]);
    }
  }, [popularLocations]);

  useEffect(() => {
    if (data && !data.toggleDisplay)
      history.push('/produce-in-korea/popular-locations');
  }, [data]);

  return (
    <PopularLocation
      data={data && data}
      history={history}
      isMobile={isMobile}
    />
  );
};

export default withRouter(PopularLocationContainer);

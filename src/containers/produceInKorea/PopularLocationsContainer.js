import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PopularLocations from '../../components/produceInKorea/PopularLocations';
import {
  GYEONGBOKGUNG,
  GYEONGBOKGUNG02,
  GYEONGBOKGUNG03,
  SEOUL01,
  SEOUL02,
  SEOUL03,
  HANOKMAEUL02,
  HANOKMAEUL,
} from '../../assets';
import { useMediaQuery } from 'react-responsive';
import { listPopularLocations } from '../../modules/popularLocations';

const PopularLocationsContainer = ({ location, history }) => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  // const retrieved = {
  //   id: 1,
  //   name: 'PopularLocations',
  //   title: 'Popular Locations',
  //   subtitle: 'Popular locations list!',
  //   titleImage: GYEONGBOKGUNG03,
  //   cards: SAMPLEYOUTUBES,
  // };
  const { popularLocations, error, loading } = useSelector(
    ({ popularLocations, loading, user }) => ({
      popularLocations: popularLocations.popularLocations,
      error: popularLocations.error,
      loading: loading['popularLocations/LIST_POPULARLOCATIONS'],
    }),
  );

  useEffect(() => {
    // console.log('==8880');
    dispatch(
      listPopularLocations({ toggleDisplay: true, name: 'PopularLocations' }),
    );
  }, []);

  return (
    <PopularLocations
      isMobile={isMobile}
      locations={popularLocations}
      history={history}
    />
  );
};

export default withRouter(PopularLocationsContainer);

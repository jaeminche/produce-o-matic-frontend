import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';
import { listPopularLocations } from '../../../modules/popularLocations';
import PopularLocations from '../../components/contents/PopularLocations';
import { myToast } from '../../../lib/util/myToast';

const PopularLocationsContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { popularLocations } = useSelector(({ popularLocations }) => ({
    popularLocations: popularLocations.popularLocations,
  }));

  useEffect(() => {
    dispatch(listPopularLocations());
  }, []);

  // const onRowClick = (e) => history.push()

  return (
    <PopularLocations history={history} popularLocations={popularLocations} />
  );
};

export default withRouter(PopularLocationsContainer);

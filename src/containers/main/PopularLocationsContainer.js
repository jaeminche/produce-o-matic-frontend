import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostsList from '../../components/posts/PostsList';
import { listPosts } from '../../modules/posts';
import { GYEONGBOKGUNG, GYEONGBOKGUNG02 } from '../../assets';
import PopularLocations from '../../components/main/PopularLocations';

const PopularLocationsContainer = ({}) => {
  return <PopularLocations imgs={[GYEONGBOKGUNG, GYEONGBOKGUNG02]} />;
};

export default withRouter(PopularLocationsContainer);

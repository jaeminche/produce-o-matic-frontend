import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostsList from '../../components/posts/PostsList';
import { listPosts } from '../../modules/posts';
import { GYEONGBOKGUNG, GYEONGBOKGUNG02 } from '../../assets';
import PopularLocations from '../../components/main/PopularLocations';

// todo: DATA TO BE RETRIEVED
const temp = [
  {
    id: 1,
    imgpath: GYEONGBOKGUNG,
    title: 'First Image Title',
    subtitle: 'First Subtitle first subtitle',
  },
  {
    id: 2,
    imgpath: GYEONGBOKGUNG02,
    title: 'Second Image Title',
    subtitle: 'Second Subtitle Second subtitle',
  },
];

const PopularLocationsContainer = ({}) => {
  return <PopularLocations items={temp} />;
};

export default withRouter(PopularLocationsContainer);

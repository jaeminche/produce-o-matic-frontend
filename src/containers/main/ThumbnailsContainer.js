import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PostsList from '../../components/posts/PostsList';
import { listPosts } from '../../modules/posts';
import {
  THUMB1_GENERAL,
  THUMB2_OMATIC,
  THUMB3_OMANUAL,
  THUMB4_OPEOPLE,
} from '../../assets';
import Thumbnails from '../../components/main/Thumbnails';

const ThumbnailsContainer = () => {
  const data = [
    { id: 1, title: 'General Knowledge', to: '/', imgpath: THUMB1_GENERAL },
    {
      id: 2,
      title: 'Produce-O-Matic Summary',
      to: '/',
      imgpath: THUMB2_OMATIC,
    },
    {
      id: 3,
      title: 'Produce-O-Manual Summary',
      to: '/',
      imgpath: THUMB3_OMANUAL,
    },
    {
      id: 4,
      title: ' Produce-O-People Summary',
      to: '/',
      imgpath: THUMB4_OPEOPLE,
    },
  ];
  return <Thumbnails data={data} />;
};

export default withRouter(ThumbnailsContainer);

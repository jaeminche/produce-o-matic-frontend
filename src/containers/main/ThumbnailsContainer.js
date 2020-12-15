import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  THUMB1_GENERAL,
  THUMB2_OMATIC,
  THUMB3_OMANUAL,
  THUMB4_OPEOPLE,
} from '../../assets';
import Thumbnails from '../../components/main/Thumbnails';

const ThumbnailsContainer = () => {
  const data = [
    {
      id: 1,
      title: 'General Knowledge',
      to: '/produce-in-korea/general-knowledge/korea',
      imgpath: THUMB1_GENERAL,
    },
    {
      id: 2,
      title: 'Produce-O-Matic',
      to: '/produce-o-matic',
      imgpath: THUMB2_OMATIC,
    },
    {
      id: 3,
      title: 'Produce-O-Manual',
      to: '/produce-o-manual',
      imgpath: THUMB3_OMANUAL,
    },
    {
      id: 4,
      title: ' Produce-O-People',
      to: '/produce-o-people',
      imgpath: THUMB4_OPEOPLE,
    },
  ];
  return <Thumbnails data={data} />;
};

export default withRouter(ThumbnailsContainer);

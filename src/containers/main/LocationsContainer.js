import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  GYEONGBOKGUNG,
  GYEONGBOKGUNG02,
  HANOKMAEUL,
  INSADONG,
} from '../../assets';
import Locations from '../../components/main/Locations';

// todo: DATA TO BE RETRIEVED
const temp1 = [
  {
    id: 1,
    imgpath: GYEONGBOKGUNG,
    title: 'Coming Soon!',
    subtitle: 'Contact us at produceomatic@gmail.com',
    url: '/produce-in-korea/popular-locations/1', //TODO: replace the samples
  },
  {
    id: 2,
    imgpath: GYEONGBOKGUNG02,
    title: 'Coming Soon!',
    subtitle: 'Contact us at produceomatic@gmail.com',
    url: '/produce-in-korea/popular-locations/2', //TODO: replace the samples
  },
];
const temp2 = [
  {
    id: 1,
    imgpath: HANOKMAEUL,
    title: 'Coming Soon!',
    subtitle: 'Contact us at produceomatic@gmail.com',
    url: 'https://www.lonelyplanet.com/south-korea/seoul', //TODO: replace the samples
  },
  {
    id: 2,
    imgpath: INSADONG,
    title: 'Coming Soon!',
    subtitle: 'Contact us at produceomatic@gmail.com',
    url:
      'https://www.lonelyplanet.com/south-korea/seoul/activities/half-day-korean-dmz-tour-from-seoul/a/pa-act/v-30023P6/357441', //TODO: replace the samples
  },
];

const LocationsContainer = ({ type }) => {
  return <Locations items={type === 'youtube' ? temp1 : temp2} />;
};

export default withRouter(LocationsContainer);

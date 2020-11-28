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
  },
  {
    id: 2,
    imgpath: GYEONGBOKGUNG02,
    title: 'Coming Soon!',
    subtitle: 'Contact us at produceomatic@gmail.com',
  },
];
const temp2 = [
  {
    id: 1,
    imgpath: HANOKMAEUL,
    title: 'Coming Soon!',
    subtitle: 'Contact us at produceomatic@gmail.com',
  },
  {
    id: 2,
    imgpath: INSADONG,
    title: 'Coming Soon!',
    subtitle: 'Contact us at produceomatic@gmail.com',
  },
];

const LocationsContainer = ({ type }) => {
  return <Locations items={type === 'youtube' ? temp1 : temp2} />;
};

export default withRouter(LocationsContainer);

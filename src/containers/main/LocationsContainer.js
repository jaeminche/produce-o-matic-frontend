import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  GYEONGBOKGUNG,
  GYEONGBOKGUNG02,
  HANOKMAEUL,
  INSADONG,
} from '../../assets';
import Locations from '../../components/main/Locations';
import { listPopularLocations } from '../../modules/popularLocations';

const temp1 = [
  {
    id: 1,
    imgpath: GYEONGBOKGUNG,
    title: 'Taekwondowon, a versatile location for film and TV',
    subtitle: `Discover the charms of Muju Taekwondowon a special filming location of South Korea`,
    url: '/produce-in-korea/popular-locations/1',
  },

  {
    id: 2,
    imgpath: GYEONGBOKGUNG02,
    title: 'Establishing Seoul city',
    subtitle: `Establishing Seoul city as background of your film`,
    url: '/produce-in-korea/popular-locations/2',
  },
  {
    id: 3,
    imgpath: HANOKMAEUL,
    title: 'Korea from the sky',
    subtitle: `Seoul and many other beautiful locations of South Korea from the sky`,
    url: '/produce-in-korea/popular-locations/3',
  },
  // {
  //   id: 1,
  //   imgpath: GYEONGBOKGUNG,
  //   title: 'Film in Seoul!',
  //   subtitle: 'We offer location incentives and much more! ',
  //   url: '/produce-in-korea/popular-locations/1',
  // },

  // {
  //   id: 2,
  //   imgpath: GYEONGBOKGUNG02,
  //   title: 'Busan!',
  //   subtitle: 'Create Your Best Film In Busan!',
  //   url: '/produce-in-korea/popular-locations/2',
  // },
];
const temp2 = [
  {
    id: 4,
    imgpath: HANOKMAEUL,
    title: 'Seoul Film Commission & Korean Film Commissions',
    subtitle: `What film commissions can do for international filmmakers and producers to shoot in South Korea and much more`,
    url: '/produce-in-korea/popular-locations/4',
  },
  {
    id: 2,
    imgpath: INSADONG,
    title: 'Pechino Express by local producer',
    subtitle:
      'Korean producer reveals how Pechino Express, an Italian reality show was produced in South Korea',
    url: '/produce-in-korea/popular-locations/5',
  },

  // {
  //   id: 1,
  //   imgpath: HANOKMAEUL,
  //   title: 'Location Incentives?',
  //   subtitle: 'To know more about location incentives, read our blogs!',
  //   url: 'https://www.lonelyplanet.com/south-korea/seoul',
  // },
  // {
  //   id: 2,
  //   imgpath: INSADONG,
  //   title: 'UP to 30% of your expense',
  //   subtitle: 'BACK TO YOU!',
  //   url:
  //     'https://www.lonelyplanet.com/south-korea/seoul/activities/half-day-korean-dmz-tour-from-seoul/a/pa-act/v-30023P6/357441',
  // },
];

const LocationsContainer = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const { locations, error, loading } = useSelector(
    ({ popularLocations, loading, user }) => ({
      locations: popularLocations.popularLocations,
      error: popularLocations.error,
      loading: loading['popularLocations/LIST_POPULARLOCATIONS'],
    }),
  );

  const popularLocations =
    locations &&
    locations.filter((location) => location.name === 'PopularLocations');
  const locationIncentives =
    locations &&
    locations.filter((location) => location.name === 'LocationIncentive');

  useEffect(() => {
    // const param =
    //   location.pathname === '/'
    //     ? { toggleDisplayOnMain: true }
    //     : location.pathname === '/produce-in-korea/popular-locations'
    //     ? { toggleDisplay: true, name: 'popularLocations' }
    //     : location.pathname === '/produce-o-manual/location-incentives'
    //     ? { toggleDisplay: true, name: 'locationIncentive' }
    //     : null;
    dispatch(listPopularLocations({ toggleDisplayOnMain: true }));
  }, []);

  return (
    <>
      {popularLocations && popularLocations.length > 0 && (
        <Locations items={popularLocations} history={history} />
      )}
      {locationIncentives && locationIncentives.length > 0 && (
        <Locations items={locationIncentives} history={history} />
      )}
    </>
  );
};

export default withRouter(LocationsContainer);

import React from 'react';
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

const PopularLocationsContainer = ({ location, history }) => {
  const retrieved = {
    id: 1,
    name: 'PopularLocations',
    title: 'Popular Locations',
    subtitle: 'Popular locations list!',
    titleImage: GYEONGBOKGUNG03,
    cards: [
      {
        id: 1,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: SEOUL01,
        tags: ['seoul', 'urban', 'incentives-on-transportation'],
        contentId: '',
        baseUrl: '/produce-in-korea/popular-locations',
      },
      {
        id: 2,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: GYEONGBOKGUNG03,
        tags: ['busan', 'urban', 'incentives-on-accomodation'],
        contentId: '',
        baseUrl: '/produce-in-korea/popular-locations',
      },
      {
        id: 3,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: GYEONGBOKGUNG02,
        tags: ['jeonju', 'suburban', 'incentives-on-accomodation'],
        contentId: '',
        baseUrl: '/produce-in-korea/popular-locations',
      },
      {
        id: 4,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: GYEONGBOKGUNG,
        tags: ['jeju', 'nature', 'incentives-on-accomodation'],
        contentId: '',
        baseUrl: '/produce-in-korea/popular-locations',
      },
      {
        id: 5,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: SEOUL03,
        tags: ['suncheon', 'nature', 'incentives-on-accomodation'],
        contentId: '',
        baseUrl: '/produce-in-korea/popular-locations',
      },
      {
        id: 6,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: SEOUL02,
        tags: ['daegu', 'urban'],
        contentId: '',
        baseUrl: '/produce-in-korea/popular-locations',
      },
      {
        id: 7,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: HANOKMAEUL02,
        tags: ['suncheon', 'nature', 'incentives-on-transportation'],
        contentId: '',
        baseUrl: '/produce-in-korea/popular-locations',
      },
      {
        id: 8,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: HANOKMAEUL,
        tags: ['dmz', 'nature', 'incentives-on-transportation'],
        contentId: '',
        baseUrl: '/produce-in-korea/popular-locations',
      },
    ],
  };
  return <PopularLocations data={retrieved} history={history} />;
};

export default withRouter(PopularLocationsContainer);

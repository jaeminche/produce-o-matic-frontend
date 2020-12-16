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
import { useMediaQuery } from 'react-responsive';
import SAMPLEYOUTUBES from '../../lib/constants/sampleYoutubes';

const PopularLocationsContainer = ({ location, history }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const retrieved = {
    id: 1,
    name: 'PopularLocations',
    title: 'Popular Locations',
    subtitle: 'Popular locations list!',
    titleImage: GYEONGBOKGUNG03,
    cards: SAMPLEYOUTUBES,
    // cards: [
    //   {
    //     id: 1,
    //     name: 'cafesAndApartment',
    //     title: 'Cafes and Apartments',
    //     subtitle:
    //       'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
    //     thumbnail: GYEONGBOKGUNG02,
    //     tags: ['seoul', 'urban', 'incentives-on-transportation'],
    //     contentId: '1',
    //     baseUrl: '/produce-in-korea/popular-locations',
    //   },
    //   {
    //     id: 2,
    //     name: 'cafesAndApartment',
    //     title: 'Cafes and Apartments',
    //     subtitle:
    //       'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
    //     thumbnail: GYEONGBOKGUNG,
    //     tags: ['busan', 'urban', 'incentives-on-accomodation'],
    //     contentId: '2',
    //     baseUrl: '/produce-in-korea/popular-locations',
    //   },
    //   {
    //     id: 3,
    //     name: 'cafesAndApartment',
    //     title: 'Cafes and Apartments',
    //     subtitle:
    //       'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
    //     thumbnail: SEOUL01,
    //     tags: ['jeonju', 'suburban', 'incentives-on-accomodation'],
    //     contentId: '1',
    //     baseUrl: '/produce-in-korea/popular-locations',
    //   },
    //   {
    //     id: 4,
    //     name: 'cafesAndApartment',
    //     title: 'Cafes and Apartments',
    //     subtitle:
    //       'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
    //     thumbnail: GYEONGBOKGUNG03,
    //     tags: ['jeju', 'nature', 'incentives-on-accomodation'],
    //     contentId: '2',
    //     baseUrl: '/produce-in-korea/popular-locations',
    //   },
    //   {
    //     id: 5,
    //     name: 'cafesAndApartment',
    //     title: 'Cafes and Apartments',
    //     subtitle:
    //       'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
    //     thumbnail: HANOKMAEUL,
    //     tags: ['suncheon', 'nature', 'incentives-on-accomodation'],
    //     contentId: '1',
    //     baseUrl: '/produce-in-korea/popular-locations',
    //   },
    //   {
    //     id: 6,
    //     name: 'cafesAndApartment',
    //     title: 'Cafes and Apartments',
    //     subtitle:
    //       'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
    //     thumbnail: SEOUL02,
    //     tags: ['daegu', 'urban'],
    //     contentId: '2',
    //     baseUrl: '/produce-in-korea/popular-locations',
    //   },
    //   {
    //     id: 7,
    //     name: 'cafesAndApartment',
    //     title: 'Cafes and Apartments',
    //     subtitle:
    //       'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
    //     thumbnail: HANOKMAEUL02,
    //     tags: ['suncheon', 'nature', 'incentives-on-transportation'],
    //     contentId: '1',
    //     baseUrl: '/produce-in-korea/popular-locations',
    //   },
    //   {
    //     id: 8,
    //     name: 'cafesAndApartment',
    //     title: 'Cafes and Apartments',
    //     subtitle:
    //       'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
    //     thumbnail: SEOUL03,
    //     tags: ['dmz', 'nature', 'incentives-on-transportation'],
    //     contentId: '2',
    //     baseUrl: '/produce-in-korea/popular-locations',
    //   },
    //   {
    //     id: 9,
    //     name: 'cafesAndApartment',
    //     title: 'Cafes and Apartments',
    //     subtitle:
    //       'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
    //     thumbnail: GYEONGBOKGUNG02,
    //     tags: ['jeonju', 'suburban', 'incentives-on-accomodation'],
    //     contentId: '1',
    //     baseUrl: '/produce-in-korea/popular-locations',
    //   },
    //   {
    //     id: 10,
    //     name: 'cafesAndApartment',
    //     title: 'Cafes and Apartments',
    //     subtitle:
    //       'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
    //     thumbnail: GYEONGBOKGUNG03,
    //     tags: ['jeonju', 'suburban', 'incentives-on-accomodation'],
    //     contentId: '2',
    //     baseUrl: '/produce-in-korea/popular-locations',
    //   },
    // ],
  };
  return (
    <PopularLocations isMobile={isMobile} data={retrieved} history={history} />
  );
};

export default withRouter(PopularLocationsContainer);

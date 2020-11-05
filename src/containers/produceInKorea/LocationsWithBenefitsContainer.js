import React from 'react';
import { withRouter } from 'react-router-dom';
import LocationsWithBenefits from '../../components/produceInKorea/LocationsWithBenefits';
import { GYEONGBOKGUNG03 } from '../../assets';

const LocationsWithBenefitsContainer = ({ location }) => {
  const retrieved = {
    id: 1,
    name: 'locationsWithBenefits',
    title: 'Locations With Benefits',
    subtitle: 'Locations with benefits list!',
    titleImage: GYEONGBOKGUNG03,
    cards: [
      {
        id: 1,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: '',
        tags: ['seoul', 'urban', 'incentives-on-transportation'],
        contentId: '',
      },
      {
        id: 2,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: '',
        tags: ['busan', 'urban', 'incentives-on-accomodation'],
        contentId: '',
      },
      {
        id: 3,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: '',
        tags: ['jeonju', 'suburban', 'incentives-on-accomodation'],
        contentId: '',
      },
      {
        id: 4,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: '',
        tags: ['jeju', 'nature', 'incentives-on-accomodation'],
        contentId: '',
      },
      {
        id: 5,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: '',
        tags: ['suncheon', 'nature', 'incentives-on-accomodation'],
        contentId: '',
      },
      {
        id: 6,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: '',
        tags: ['daegu', 'urban'],
        contentId: '',
      },
      {
        id: 7,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: '',
        tags: ['suncheon', 'nature', 'incentives-on-transportation'],
        contentId: '',
      },
      {
        id: 8,
        name: 'cafesAndApartment',
        title: 'Cafes and Apartments',
        subtitle:
          'Cafes and Apartments subtitles placeholder cafes and Apartments subtitles...',
        thumbnail: '',
        tags: ['dmz', 'nature', 'incentives-on-transportation'],
        contentId: '',
      },
    ],
  };
  return <LocationsWithBenefits data={retrieved} />;
};

export default withRouter(LocationsWithBenefitsContainer);

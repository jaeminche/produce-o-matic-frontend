import {
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  YOUTUBE_ICON,
  WHATSAPP_ICON,
} from '../../assets';

const socialMedia = [
  {
    id: 1,
    name: 'Facebook',
    icon: FACEBOOK_ICON,
    path: 'https://www.facebook.com',
  },
  {
    id: 2,
    name: 'Instagram',
    icon: INSTAGRAM_ICON,
    path: 'https://www.instagram.com',
  },
  {
    id: 1,
    name: 'Youtube',
    icon: YOUTUBE_ICON,
    path: 'https://www.youtube.com',
  },
  {
    id: 1,
    name: 'WhatsApp',
    icon: WHATSAPP_ICON,
    path: 'https://whatsapp.com',
  },
];

const terms = [
  { id: 1, text: 'Privacy Policy', path: './privacy' },
  { id: 1, text: 'Terms Of Use', path: './terms' },
  { id: 1, text: 'Copyrights', path: './copyrights' },
];

const menus = [
  {
    id: 1,
    text: 'Produce-In-Korea',
    path: './summary-produce-in-korea',
    submenus: [
      {
        id: 1,
        text: 'Summary',
        subpath: `./summary-produce-in-korea`,
      },
      {
        id: 2,
        text: 'Popular Locations',
        subpath: `./popular-locations`,
      },
      {
        id: 3,
        text: 'Locations With Benefits',
        subpath: `./locations-with-benefits`,
      },
      {
        id: 4,
        text: 'General Knowledge',
        subpath: `./general-knowledge`,
      },
    ],
  },
  {
    id: 2,
    text: 'Produce-O-Manual',
    path: './summary-produce-o-manual',
    submenus: [
      {
        id: 1,
        text: 'Summary',
        subpath: `./summary-produce-o-manual`,
      },
      {
        id: 2,
        text: 'Permit',
        subpath: `./permit`,
      },
      {
        id: 3,
        text: 'Contract',
        subpath: `./contract`,
      },
      {
        id: 4,
        text: 'Insurance',
        subpath: `./insurance`,
      },
      {
        id: 5,
        text: 'Rental',
        subpath: `./rental`,
      },
      {
        id: 6,
        text: 'Incentive',
        subpath: `./incentive`,
      },
      {
        id: 7,
        text: 'On Set Knowledge',
        subpath: `./on-set-knowledge`,
      },
      {
        id: 8,
        text: 'Download',
        subpath: `./download`,
      },
    ],
  },
  {
    id: 3,
    text: 'Produce-O-Matic',
    path: './summary-produce-o-matic',
    submenus: [
      {
        id: 1,
        text: 'Summary',
        subpath: `./summary-produce-o-matic`,
      },
      {
        id: 2,
        text: 'Budget-O-Matic',
        subpath: `./budget-o-matic`,
      },
      {
        id: 3,
        text: 'Produce-O-Matic',
        subpath: `./produce-o-matic`,
      },
      {
        id: 4,
        text: 'Account-O-Matic',
        subpath: `./account-o-matic`,
      },
    ],
  },
  {
    id: 4,
    text: 'Produce-O-People',
    path: './summary-produce-o-people',
    submenus: [
      {
        id: 1,
        text: 'Summary',
        subpath: `./summary-produce-o-people`,
      },
      {
        id: 2,
        text: 'How We Work',
        subpath: `./how-we-work`,
      },
      {
        id: 3,
        text: 'People Of The Month',
        subpath: `./people-of-the-month`,
      },
      {
        id: 4,
        text: 'Be Our People',
        subpath: `./be-our-people`,
      },
    ],
  },
];

export { menus, socialMedia, terms };

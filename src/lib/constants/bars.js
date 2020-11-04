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
  { id: 1, text: 'Privacy Policy', path: '/privacy' },
  { id: 1, text: 'Terms Of Use', path: '/terms' },
  { id: 1, text: 'Copyrights', path: '/copyrights' },
];

const menus = [
  {
    id: 1,
    text: 'Produce-In-Korea',
    path: '/produce-in-korea/summary',
    submenus: [
      {
        id: 1,
        text: 'Summary',
        path: `/produce-in-korea/summary`,
      },
      {
        id: 2,
        text: 'Popular Locations',
        path: `/produce-in-korea/popular-locations`,
      },
      {
        id: 3,
        text: 'Locations With Benefits',
        path: `/produce-in-korea/locations-with-benefits`,
      },
      {
        id: 4,
        text: 'General Knowledge',
        path: `/produce-in-korea/general-knowledge`,
      },
    ],
  },
  {
    id: 2,
    text: 'Produce-O-Manual',
    path: '/produce-o-manual/summary',
    submenus: [
      {
        id: 1,
        text: 'Summary',
        path: `/produce-o-manual/summary`,
      },
      {
        id: 2,
        text: 'Permit',
        path: `/produce-o-manual/permit`,
      },
      {
        id: 3,
        text: 'Contract',
        path: `/produce-o-manual/contract`,
      },
      {
        id: 4,
        text: 'Insurance',
        path: `/produce-o-manual/insurance`,
      },
      {
        id: 5,
        text: 'Rental',
        path: `/produce-o-manual/rental`,
      },
      {
        id: 6,
        text: 'Incentive',
        path: `/produce-o-manual/incentive`,
      },
      {
        id: 7,
        text: 'On Set Knowledge',
        path: `/produce-o-manual/on-set-knowledge`,
      },
      {
        id: 8,
        text: 'Download',
        path: `/produce-o-manual/download`,
      },
    ],
  },
  {
    id: 3,
    text: 'Produce-O-Matic',
    path: '/produce-o-matic/summary',
    submenus: [
      {
        id: 1,
        text: 'Summary',
        path: `/produce-o-matic/summary`,
      },
      {
        id: 2,
        text: 'Budget-O-Matic',
        path: `/produce-o-matic/budget-o-matic`,
      },
      {
        id: 3,
        text: 'Produce-O-Matic',
        path: `/produce-o-matic/produce-o-matic`,
      },
      {
        id: 4,
        text: 'Account-O-Matic',
        path: `/produce-o-matic/account-o-matic`,
      },
    ],
  },
  {
    id: 4,
    text: 'Produce-O-People',
    path: '/produce-o-people/summary',
    submenus: [
      {
        id: 1,
        text: 'Summary',
        path: `/produce-o-people/summary`,
      },
      {
        id: 2,
        text: 'How We Work',
        path: `/produce-o-people/how-we-work`,
      },
      {
        id: 3,
        text: 'People Of The Month',
        path: `/produce-o-people/people-of-the-month`,
      },
      {
        id: 4,
        text: 'Be Our People',
        path: `/produce-o-people/be-our-people`,
      },
    ],
  },
];

export { menus, socialMedia, terms };

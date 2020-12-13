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
    path: '/produce-in-korea',
    submenus: [
      {
        id: 1,
        text: 'Popular Locations',
        path: `/produce-in-korea/popular-locations`,
      },
      {
        id: 2,
        text: 'Location Incentive',
        path: `/produce-in-korea/location-incentives`,
      },
      {
        id: 3,
        text: 'General Knowledge',
        path: `/produce-in-korea/general-knowledge/korea`,
      },
    ],
  },
  {
    id: 2,
    text: 'Produce-O-Manual',
    path: '/produce-o-manual',
    submenus: [
      {
        id: 1,
        text: 'Permit',
        path: `/produce-o-manual/permit`,
      },
      {
        id: 2,
        text: 'Contract',
        path: '/produce-o-manual/contract',
      },
      {
        id: 3,
        text: 'Insurance',
        path: '/produce-o-manual/insurance',
      },
      {
        id: 4,
        text: 'Rental',
        path: '/produce-o-manual/rental',
      },
    ],
  },
  {
    id: 3,
    text: 'Produce-O-Matic',
    path: '/produce-o-matic',
    submenus: [
      {
        id: 1,
        text: 'Budget-O-Matic',
        path: '/produce-o-matic/budget-o-matic',
      },
      // {
      //   id: 2,
      //   text: 'Produce-O-Matic',
      //   path: '/produce-o-matic/produce-o-matic',
      // },
      // {
      //   id: 3,
      //   text: 'Account-O-Matic',
      //   path: '/produce-o-matic/account-o-matic',
      // },
    ],
  },
  {
    id: 4,
    text: 'Produce-O-People',
    path: '/produce-o-people',
    submenus: [
      // {
      //   id: 1,
      //   text: 'Our Vision',
      //   path: '/produce-o-people/our-vision',
      // },
      // {
      //   id: 2,
      //   text: 'People Of The Month',
      //   path: '/produce-o-people/people-of-the-month',
      // },
      // {
      //   id: 3,
      //   text: 'Be Our People',
      //   path: '/produce-o-people/be-our-people',
      // },
      {
        id: 4,
        text: 'Contact Us',
        path: '/produce-o-people/contact-us',
      },
    ],
  },
];

export { menus, socialMedia, terms };

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
    path:
      'https://www.youtube.com/channel/UC118oCP9Fo9L4VTJtFIVBHw?feature=emb_ch_name_ex',
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
    text: 'Film In Korea',
    path: '/produce-in-korea',
    submenus: [
      {
        id: 1,
        text: 'Korea In A Nutshell',
        path: `/produce-in-korea/korea-in-a-nutshell`,
      },
      {
        id: 2,
        text: 'Popular Locations',
        path: `/produce-in-korea/popular-locations`,
      },
      {
        id: 3,
        text: 'Security & Health & Food',
        path: `/produce-in-korea/security-health-food`,
      },
      {
        id: 4,
        text: 'Transport & Communication',
        path: `/produce-in-korea/transport-communication`,
      },
    ],
  },
  {
    id: 2,
    text: 'Production Handbook',
    path: '/produce-o-manual',
    submenus: [
      {
        id: 1,
        text: 'Location Incentive',
        path: `/produce-o-manual/location-incentives`,
      },
      {
        id: 2,
        text: 'Permit',
        path: `/produce-o-manual/permit`,
      },
      {
        id: 3,
        text: 'Contract',
        path: '/produce-o-manual/contract',
      },
      {
        id: 4,
        text: 'Insurance',
        path: '/produce-o-manual/insurance',
      },
      {
        id: 5,
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
      {
        id: 2,
        text: 'Produce-O-Matic',
        path: '/produce-o-matic/produce-o-matic',
      },
      // {
      //   id: 3,
      //   text: 'Account-O-Matic',
      //   path: '/produce-o-matic/account-o-matic',
      // },
    ],
  },
  {
    id: 4,
    text: 'About Us',
    path: '/produce-o-people',
    submenus: [
      {
        id: 1,
        text: 'Our Vision',
        path: '/produce-o-people/our-vision',
      },
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
        text: 'Contact',
        path: '/produce-o-people/contact',
      },
    ],
  },
];

export { menus, socialMedia, terms };

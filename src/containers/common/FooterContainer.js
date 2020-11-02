import React from 'react';
import Footer from '../../components/common/Footer';
import {
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  YOUTUBE_ICON,
  WHATSAPP_ICON,
} from '../../assets';
const FooterContainer = () => {
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
      path: './produce-in-korea',
      submenus: [
        {
          id: 1,
          text: 'Popular Locations',
          subpath: `./popular-locations`,
        },
        {
          id: 2,
          text: 'Locations With Benefits',
          subpath: `./locations-with-benefits`,
        },
        {
          id: 3,
          text: 'General Knowledge',
          subpath: `./general-knowledge`,
        },
      ],
    },
    {
      id: 2,
      text: 'Produce-O-Manual',
      path: './produce-o-manual',
      submenus: [
        {
          id: 1,
          text: 'Permit',
          subpath: `./permit`,
        },
        {
          id: 2,
          text: 'Contract',
          subpath: `./contract`,
        },
        {
          id: 3,
          text: 'Insurance',
          subpath: `./insurance`,
        },
        {
          id: 4,
          text: 'Rental',
          subpath: `./rental`,
        },
        {
          id: 5,
          text: 'Incentive',
          subpath: `./incentive`,
        },
        {
          id: 6,
          text: 'On Set Knowledge',
          subpath: `./on-set-knowledge`,
        },
        {
          id: 7,
          text: 'Download',
          subpath: `./download`,
        },
      ],
    },
    {
      id: 3,
      text: 'Produce-O-Matic',
      path: './produce-o-matic',
      submenus: [
        {
          id: 1,
          text: 'Budget-O-Matic',
          subpath: `./budget-o-matic`,
        },
        {
          id: 2,
          text: 'Produce-O-Matic',
          subpath: `./produce-o-matic`,
        },
        {
          id: 3,
          text: 'Account-O-Matic',
          subpath: `./account-o-matic`,
        },
      ],
    },
    {
      id: 4,
      text: 'Produce-O-People',
      path: './produce-o-people',
      submenus: [
        {
          id: 1,
          text: 'How We Work',
          subpath: `./how-we-work`,
        },
        {
          id: 2,
          text: 'People Of The Month',
          subpath: `./people-of-the-month`,
        },
        {
          id: 3,
          text: 'Be Our People',
          subpath: `./be-our-people`,
        },
      ],
    },
  ];
  return <Footer menus={menus} socialMedia={socialMedia} terms={terms} />;
};

export default FooterContainer;

import React from 'react';
import Footer from '../../components/common/Footer';
import { menus, socialMedia, terms } from '../../lib/constants/bars';

const FooterContainer = () => {
  return <Footer menus={menus} socialMedia={socialMedia} terms={terms} />;
};

export default FooterContainer;

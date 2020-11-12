import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
import ContentsContainer from '../containers/common/ContentsContainer';
import FooterContainer from '../containers/common/FooterContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const ContactUsPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const ContactUsPage = () => {
  const pagekey = 'contact_us';
  return (
    <ContactUsPageBlock>
      <Helmet>
        <title>{pagekey}</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={3} />
      <ContentsContainer pagekey={pagekey} />
      <FooterContainer />
    </ContactUsPageBlock>
  );
};

export default ContactUsPage;

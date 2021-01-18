import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
import ContentsContainer from '../containers/common/ContentsContainer';
import FooterContainer from '../containers/common/FooterContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const OurVisionPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const OurVisionPage = () => {
  const pagekey = 'our_vision';

  return (
    <OurVisionPageBlock>
      <Helmet>
        <title>PRODUCE-O-MATIC_{pagekey}</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={3} />
      <ContentsContainer pagekey={pagekey} />
      <FooterContainer />
    </OurVisionPageBlock>
  );
};

export default OurVisionPage;

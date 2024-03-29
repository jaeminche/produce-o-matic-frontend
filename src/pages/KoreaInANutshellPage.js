import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
import ContentsContainer from '../containers/common/ContentsContainer';
import IntroTextContainer from '../containers/common/IntroTextContainer';
import FooterContainer from '../containers/common/FooterContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const KoreaInANutshellPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const KoreaInANutshellPage = () => {
  const pagekey = 'koreaInANutshell';
  return (
    <KoreaInANutshellPageBlock>
      <Helmet>
        <title>PRODUCE-O-MATIC_{pagekey}</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={0} />
      <ContentsContainer pagekey={pagekey} />
      <IntroTextContainer />
      <FooterContainer />
    </KoreaInANutshellPageBlock>
  );
};

export default KoreaInANutshellPage;

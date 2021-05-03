import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import FooterContainer from '../containers/common/FooterContainer';
import LocationsContainer from '../containers/main/LocationsContainer';
import IntroTextContainer from '../containers/common/IntroTextContainer';
import ThumbnailsContainer from '../containers/main/ThumbnailsContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const MainPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const MainPage = () => {
  return (
    <MainPageBlock>
      <Helmet>
        <title>Produce-O-Matic</title>
      </Helmet>
      {/* possible props: Spacer, reverse-color */}
      <HeaderContainer />
      <LocationsContainer />
      {/* <LocationsContainer type="locationIncentive" /> */}
      <IntroTextContainer />
      <ThumbnailsContainer />
      <FooterContainer />
    </MainPageBlock>
  );
};

export default MainPage;

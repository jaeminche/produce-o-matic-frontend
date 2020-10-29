import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import LocationsContainer from '../containers/main/LocationsContainer';
import IntroTextContainer from '../containers/main/IntroTextContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const MainPageBlock = styled.div`
  background: ${palette.gray[9]};
  color: white;
`;

const MainPage = () => {
  return (
    <MainPageBlock>
      <Helmet>
        <title>Main_PRODUCE-O-MATIC</title>
      </Helmet>
      {/* possible props: Spacer, reverse-color */}
      <HeaderContainer />
      <LocationsContainer type="youtube" />
      <LocationsContainer type="blog" />
      <IntroTextContainer />
    </MainPageBlock>
  );
};

export default MainPage;

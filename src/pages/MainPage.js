import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import PopularLocationsContainer from '../containers/main/PopularLocationsContainer';
import styled from 'styled-components';

const MainPageBlock = styled.div`
  background: black;
`;

const MainPage = () => {
  return (
    <MainPageBlock>
      <Helmet>
        <title>Main_PRODUCE-O-MATIC</title>
      </Helmet>
      {/* possible props: Spacer, reverse-color */}
      <HeaderContainer />
      <PopularLocationsContainer />
      <div>next</div>
    </MainPageBlock>
  );
};

export default MainPage;

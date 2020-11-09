import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
import PopularLocationsContainer from '../containers/produceInKorea/PopularLocationsContainer';

import FooterContainer from '../containers/common/FooterContainer';
// import LocationsContainer from '../containers/main/LocationsContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const PopularLocationsPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const PopularLocationsPage = () => {
  return (
    <PopularLocationsPageBlock>
      <Helmet>
        <title>PopularLocations_PRODUCE-O-MATIC</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={0} />
      <PopularLocationsContainer />
      <FooterContainer />
    </PopularLocationsPageBlock>
  );
};

export default PopularLocationsPage;

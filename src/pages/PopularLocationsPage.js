import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
import PopularLocationsContainer from '../containers/produceInKorea/PopularLocationsContainer';
import IntroTextContainer from '../containers/common/IntroTextContainer';
import FooterContainer from '../containers/common/FooterContainer';
// import LocationsContainer from '../containers/main/LocationsContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const PopularLocationsPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const PopularLocationsPage = () => {
  const pagekey = 'popularLocations';
  return (
    <PopularLocationsPageBlock>
      <Helmet>
        <title>PRODUCE-O-MATIC_{pagekey}</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={0} />
      <PopularLocationsContainer />
      <IntroTextContainer />
      <FooterContainer />
    </PopularLocationsPageBlock>
  );
};

export default PopularLocationsPage;

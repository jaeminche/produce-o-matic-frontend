import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
// import LocationsWithBenefitsContainer from '../containers/produceInKorea/PopularLocationsContainer';
import FooterContainer from '../containers/common/FooterContainer';
// import LocationsContainer from '../containers/main/LocationsContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const LocationsWithBenefitsPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const LocationsWithBenefitsPage = () => {
  return (
    <LocationsWithBenefitsPageBlock>
      <Helmet>
        <title>LocationsWithBenefits_PRODUCE-O-MATIC</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={0} />
      {/* <LocationsWithBenefitsContainer /> */}
      <FooterContainer />
    </LocationsWithBenefitsPageBlock>
  );
};

export default LocationsWithBenefitsPage;

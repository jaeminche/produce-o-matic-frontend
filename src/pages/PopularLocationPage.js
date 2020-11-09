import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
import PopularLocationContainer from '../containers/produceInKorea/PopularLocationContainer';
import FooterContainer from '../containers/common/FooterContainer';
// import LocationsContainer from '../containers/main/LocationsContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const PopularLocationPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const PopularLocationPage = () => {
  return (
    <PopularLocationPageBlock>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={0} />
      <PopularLocationContainer />
      <FooterContainer />
    </PopularLocationPageBlock>
  );
};

export default PopularLocationPage;

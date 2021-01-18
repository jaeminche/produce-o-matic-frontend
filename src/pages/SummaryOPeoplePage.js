import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
import SummaryContainer from '../containers/common/SummaryContainer';
import FooterContainer from '../containers/common/FooterContainer';
// import LocationsContainer from '../containers/main/LocationsContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const SummaryOPeoplePageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const SummaryOPeoplePage = () => {
  const pagekey = 'aboutUs';
  return (
    <SummaryOPeoplePageBlock>
      <Helmet>
        <title>PRODUCE-O-MATIC_{pagekey}</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={3} />
      <SummaryContainer />
      <FooterContainer />
    </SummaryOPeoplePageBlock>
  );
};

export default SummaryOPeoplePage;

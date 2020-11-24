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

const SummaryOMaticPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const SummaryOMaticPage = () => {
  return (
    <SummaryOMaticPageBlock>
      <Helmet>
        <title>Produce-O-Matic_PRODUCE-O-MATIC</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={2} />
      <SummaryContainer />

      <FooterContainer />
    </SummaryOMaticPageBlock>
  );
};

export default SummaryOMaticPage;
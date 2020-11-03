import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
// import ContentsContainer from '../containers/common/ContentsContainer';
import FooterContainer from '../containers/common/FooterContainer';
// import LocationsContainer from '../containers/main/LocationsContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const SummaryInKoreaPageBlock = styled.div`
  background: ${palette.gray[9]};
  color: white;
`;

const SummaryInKoreaPage = () => {
  return (
    <SummaryInKoreaPageBlock>
      <Helmet>
        <title>Produce-In-Korea_PRODUCE-O-MATIC</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer />
      {/* <ContentsContainer /> */}
      <FooterContainer />
    </SummaryInKoreaPageBlock>
  );
};

export default SummaryInKoreaPage;

import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import FooterContainer from '../containers/common/FooterContainer';
// import LocationsContainer from '../containers/main/LocationsContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const ContractPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const ContractPage = () => {
  return (
    <ContractPageBlock>
      <Helmet>
        <title>Contract_PRODUCE-O-MATIC</title>
      </Helmet>
      <HeaderContainer />
      <></>
      <FooterContainer />
    </ContractPageBlock>
  );
};

export default ContractPage;

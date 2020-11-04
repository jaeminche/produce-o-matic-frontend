import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import FooterContainer from '../containers/common/FooterContainer';
// import LocationsContainer from '../containers/main/LocationsContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const GeneralKnowledgePageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const GeneralKnowledgePage = () => {
  return (
    <GeneralKnowledgePageBlock>
      <Helmet>
        <title>GeneralKnowledge_PRODUCE-O-MATIC</title>
      </Helmet>
      <HeaderContainer />
      <></>
      <FooterContainer />
    </GeneralKnowledgePageBlock>
  );
};

export default GeneralKnowledgePage;

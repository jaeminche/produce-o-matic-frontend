import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import FooterContainer from '../containers/common/FooterContainer';
// import LocationsContainer from '../containers/main/LocationsContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const OnSetKnowledgePageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const OnSetKnowledgePage = () => {
  return (
    <OnSetKnowledgePageBlock>
      <Helmet>
        <title>OnSetKnowledge_PRODUCE-O-MATIC</title>
      </Helmet>
      <HeaderContainer />
      <></>
      <FooterContainer />
    </OnSetKnowledgePageBlock>
  );
};

export default OnSetKnowledgePage;

import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
import ContentsContainer from '../containers/common/ContentsContainer';
import FooterContainer from '../containers/common/FooterContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const ProduceOMaticPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const ProduceOMaticPage = () => {
  const pagekey = 'produce_o_matic';

  return (
    <ProduceOMaticPageBlock>
      <Helmet>
        <title>ProduceOMatic_PRODUCE-O-MATIC</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={2} />
      <ContentsContainer pagekey={pagekey} />
      <FooterContainer />
    </ProduceOMaticPageBlock>
  );
};

export default ProduceOMaticPage;

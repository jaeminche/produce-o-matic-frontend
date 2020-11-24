import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import SubHeaderContainer from '../containers/common/SubHeaderContainer';
import ContentsContainer from '../containers/common/ContentsContainer';
import FooterContainer from '../containers/common/FooterContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const PermitPageBlock = styled.div`
  background: ${palette.background[0]};
  color: white;
`;

const PermitPage = () => {
  const pagekey = 'permit';
  return (
    <PermitPageBlock>
      <Helmet>
        <title>{pagekey}</title>
      </Helmet>
      <HeaderContainer />
      <SubHeaderContainer menuIndex={1} />
      <ContentsContainer pagekey={pagekey} />
      <FooterContainer />
    </PermitPageBlock>
  );
};

export default PermitPage;
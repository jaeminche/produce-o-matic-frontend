import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import FooterContainer from '../containers/common/FooterContainer';
// import LocationsContainer from '../containers/main/LocationsContainer';
import styled from 'styled-components/macro';
import palette from '../lib/styles/palette';

const DownloadPageBlock = styled.div`
  background: ${palette.gray[9]};
  color: white;
`;

const DownloadPage = () => {
  return (
    <DownloadPageBlock>
      <Helmet>
        <title>Download_PRODUCE-O-MATIC</title>
      </Helmet>
      <HeaderContainer />
      <></>
      <FooterContainer />
    </DownloadPageBlock>
  );
};

export default DownloadPage;

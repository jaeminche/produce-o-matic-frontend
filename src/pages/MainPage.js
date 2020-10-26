import React from 'react';
import Responsive from '../components/common/Responsive';
// import HeaderContainer from '../containers/common/FirstAvnHeaderContainer';
import { Helmet } from 'react-helmet-async';

const MainPage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>Main_PRODUCE-O-MATIC</title>
      </Helmet>
      {/* <HeaderContainer /> */}
    </Responsive>
  );
};

export default MainPage;

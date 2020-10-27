import React from 'react';
// import Responsive from '../components/common/Responsive';
import { Helmet } from 'react-helmet-async';
import HeaderContainer from '../containers/common/HeaderContainer';
import PopularLocationsContainer from '../containers/main/PopularLocationsContainer';
const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Main_PRODUCE-O-MATIC</title>
      </Helmet>
      <HeaderContainer />
      <div>
        <PopularLocationsContainer />
        <div style={{ position: 'relative' }}>next</div>
      </div>
    </>
  );
};

export default MainPage;

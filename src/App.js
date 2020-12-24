import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import PostsListPage from './pages/PostsListPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

import MainPage from './pages/MainPage';
import Background from './components/background/background';
import SummaryInKoreaPage from './pages/SummaryInKoreaPage';
import SummaryOManualPage from './pages/SummaryOManualPage';
import SummaryOMaticPage from './pages/SummaryOMaticPage';
import SummaryOPeoplePage from './pages/SummaryOPeoplePage';
import PopularLocationsPage from './pages/PopularLocationsPage';
import PopularLocationPage from './pages/PopularLocationPage';
import LocationIncentivesPage from './pages/LocationIncentivesPage';
import GeneralKnowledgePage from './pages/GeneralKnowledgePage';
import PermitPage from './pages/PermitPage';
import ContractPage from './pages/ContractPage';
import InsurancePage from './pages/InsurancePage';
import RentalPage from './pages/RentalPage';
import BudgetOMaticPage from './pages/BudgetOMaticPage';
import BudgetResultPage from './pages/BudgetResultPage';
import ProduceOMaticPage from './pages/ProduceOMaticPage';
import AccountOMaticPage from './pages/AccountOMaticPage';
import OurVisionPage from './pages/OurVisionPage';
import PeopleOfTheMonthPage from './pages/PeopleOfTheMonthPage';
import BeOurPeoplePage from './pages/BeOurPeoplePage';
import ContactUsPage from './pages/ContactUsPage';

import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Background />
      <Helmet>
        <title>PRODUCE-O-MATIC</title>
      </Helmet>
      {/* ----- Async request test pages starts ----- */}
      <Route
        component={PostsListPage}
        path={['/posttest/@:username', '/posttest']}
        exact
      />
      <Route component={LoginPage} path="/posttest/login" />
      <Route component={SignupPage} path="/posttest/signup" />
      <Route component={WritePage} path="/posttest/write" />
      <Route component={PostPage} path="/posttest/@:username/:postId" />
      {/* ----- Async request test pages ends ----- */}
      {/* ----- admin pages starts ----- */}
      <Route
        component={PostsListPage}
        path={['/firstavenue/@:username', '/firstavenue']}
        exact
      />
      <Route component={LoginPage} path="/firstavenue/login" />
      <Route component={SignupPage} path="/firstavenue/signup" />
      <Route component={WritePage} path="/firstavenue/write" />
      <Route component={PostPage} path="/firstavenue/@:username/:postId" />
      {/* ----- admin pages ends ----- */}

      <Route component={MainPage} exact path="/" />
      <Route component={SummaryInKoreaPage} exact path="/produce-in-korea" />
      <Route component={SummaryOManualPage} exact path="/produce-o-manual" />
      <Route component={SummaryOMaticPage} exact path="/produce-o-matic" />
      <Route component={SummaryOPeoplePage} exact path="/produce-o-people" />
      <Route
        component={PopularLocationsPage}
        exact
        path="/produce-in-korea/popular-locations"
      />
      <Route
        component={PopularLocationPage}
        exact
        path="/produce-in-korea/popular-locations/:id"
      />
      <Route
        component={LocationIncentivesPage}
        exact
        path="/produce-in-korea/location-incentives"
      />
      <Route
        component={GeneralKnowledgePage}
        path="/produce-in-korea/general-knowledge/:active_tab?"
      />
      <Route component={PermitPage} exact path="/produce-o-manual/permit" />
      <Route component={ContractPage} exact path="/produce-o-manual/contract" />
      <Route
        component={InsurancePage}
        exact
        path="/produce-o-manual/insurance"
      />
      <Route component={RentalPage} exact path="/produce-o-manual/rental" />
      <Route
        component={BudgetOMaticPage}
        exact
        path="/produce-o-matic/budget-o-matic"
      />
      <Route
        component={BudgetResultPage}
        exact
        path="/produce-o-matic/budget-o-matic/result/:id"
      />
      <Route
        component={ProduceOMaticPage}
        exact
        path="/produce-o-matic/produce-o-matic"
      />
      <Route
        component={AccountOMaticPage}
        exact
        path="/produce-o-matic/account-o-matic"
      />
      <Route
        component={OurVisionPage}
        exact
        path="/produce-o-people/our-vision"
      />
      <Route
        component={PeopleOfTheMonthPage}
        exact
        path="/produce-o-people/people-of-the-month"
      />
      <Route
        component={BeOurPeoplePage}
        exact
        path="/produce-o-people/be-our-people"
      />
      <Route
        component={ContactUsPage}
        exact
        path="/produce-o-people/contact-us"
      />
    </>
  );
};

export default App;

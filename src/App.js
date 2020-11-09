import React from 'react';
import { Route } from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

import MainPage from './pages/MainPage';
import SummaryInKoreaPage from './pages/SummaryInKoreaPage';
import SummaryOManualPage from './pages/SummaryOManualPage';
import SummaryOMaticPage from './pages/SummaryOMaticPage';
import SummaryOPeoplePage from './pages/SummaryOPeoplePage';

import PopularLocationsPage from './pages/PopularLocationsPage';
import LocationsWithBenefitsPage from './pages/LocationsWithBenefitsPage';
import GeneralKnowledgePage from './pages/GeneralKnowledgePage';
import PermitPage from './pages/PermitPage';
import ContractPage from './pages/ContractPage';
import InsurancePage from './pages/InsurancePage';
import RentalPage from './pages/RentalPage';
import BudgetOMaticPage from './pages/BudgetOMaticPage';
import ProduceOMaticPage from './pages/ProduceOMaticPage';
import AccountOMaticPage from './pages/AccountOMaticPage';
import OurVisionPage from './pages/OurVisionPage';
import PeopleOfTheMonthPage from './pages/PeopleOfTheMonthPage';
import BeOurPeoplePage from './pages/BeOurPeoplePage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>PRODUCE-O-MATIC</title>
      </Helmet>
      {/* ----- Admin Pages starts ----- */}
      <Route
        component={PostsListPage}
        path={['/firstavenue/@:username', '/firstavenue']}
        exact
      />
      <Route component={LoginPage} path="/firstavenue/login" />
      <Route component={SignupPage} path="/firstavenue/signup" />
      <Route component={WritePage} path="/firstavenue/write" />
      <Route component={PostPage} path="/firstavenue/@:username/:postId" />
      {/* ----- Admin Pages ends ----- */}

      <Route component={MainPage} exact path="/" />
      <Route
        component={SummaryInKoreaPage}
        exact
        path="/produce-in-korea/summary"
      />
      <Route
        component={SummaryOManualPage}
        exact
        path="/produce-o-manual/summary"
      />
      <Route
        component={SummaryOMaticPage}
        exact
        path="/produce-o-matic/summary"
      />
      <Route
        component={SummaryOPeoplePage}
        exact
        path="/produce-o-people/summary"
      />
      <Route
        component={PopularLocationsPage}
        exact
        path="/produce-in-korea/popular-locations"
      />
      <Route
        component={LocationsWithBenefitsPage}
        exact
        path="/produce-in-korea/locations-with-benefits"
      />
      <Route
        component={GeneralKnowledgePage}
        exact
        path="/produce-in-korea/general-knowledge"
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
        path="/produce-o-people/how-we-work"
      />
      {/* TODO: add Contact Us page  */}
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
    </>
  );
};

export default App;

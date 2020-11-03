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
import IncentivePage from './pages/IncentivePage';
import OnSetKnowledgePage from './pages/OnSetKnowledgePage';
import DownloadPage from './pages/DownloadPage';
import BudgetOMaticPage from './pages/BudgetOMaticPage';
import ProduceOMaticPage from './pages/ProduceOMaticPage';
import AccountOMaticPage from './pages/AccountOMaticPage';
import HowWeWorkPage from './pages/HowWeWorkPage';
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
      <Route component={SummaryInKoreaPage} path="/summary-produce-in-korea" />
      <Route component={SummaryOManualPage} path="/summary-produce-o-manual" />
      <Route component={SummaryOMaticPage} path="/summary-produce-o-matic" />
      <Route component={SummaryOPeoplePage} path="/summary-produce-o-people" />
      <Route component={PopularLocationsPage} path="/popular-locations" />
      <Route
        component={LocationsWithBenefitsPage}
        path="/locations-with-benefits"
      />
      <Route component={GeneralKnowledgePage} path="/general-knowledge" />
      <Route component={PermitPage} path="/permit" />
      <Route component={ContractPage} path="/contract" />
      <Route component={InsurancePage} path="/insurance" />
      <Route component={RentalPage} path="/rental" />
      <Route component={IncentivePage} path="/incentive" />
      <Route component={OnSetKnowledgePage} path="/on-set-knowledge" />
      <Route component={DownloadPage} path="/download" />
      <Route component={BudgetOMaticPage} path="/budget-o-matic" />
      <Route component={ProduceOMaticPage} path="/produce-o-matic" />
      <Route component={AccountOMaticPage} path="/account-o-matic" />
      <Route component={HowWeWorkPage} path="/how-we-work" />
      <Route component={PeopleOfTheMonthPage} path="/people-of-the-month" />
      <Route component={BeOurPeoplePage} path="/be-our-people" />
    </>
  );
};

export default App;

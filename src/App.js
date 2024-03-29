import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import ScrollToTopRoute from './components/common/ScrollToTopRoute';

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
import KoreaInANutshellPage from './pages/KoreaInANutshellPage';
import PopularLocationsPage from './pages/PopularLocationsPage';
import PopularLocationPage from './pages/PopularLocationPage';
import SecurityHealthFoodPage from './pages/SecurityHealthFoodPage';
import TransportCommunicationPage from './pages/TransportCommunicationPage';
import LocationIncentivesPage from './pages/LocationIncentivesPage';
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
import ContactPage from './pages/ContactPage';

import { Helmet } from 'react-helmet-async';
import { ToastContainer, Slide } from 'react-toastify';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
// Containers
const TheLayout = React.lazy(() => import('./admin/containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./admin/views/pages/login/Login'));
const Register = React.lazy(() =>
  import('./admin/views/pages/register/Register'),
);
const Page404 = React.lazy(() => import('./admin/views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./admin/views/pages/page500/Page500'));

const App = () => {
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === '/produce-in-korea/location-incentives')
      history.push('/produce-o-manual/location-incentives');
  }, []);

  return (
    <React.Suspense fallback={loading}>
      <Background />
      <Helmet>
        <title>PRODUCE-O-MATIC</title>
      </Helmet>
      <ToastContainer
        transition={Slide}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* ----- Async request test pages starts ----- */}
      <ScrollToTopRoute
        component={PostsListPage}
        path={['/posttest/@:username', '/posttest']}
        exact
      />
      {/* <ScrollToTopRoute component={LoginPage} path="/posttest/login" /> */}
      {/* <ScrollToTopRoute component={SignupPage} path="/posttest/signup" /> */}
      <ScrollToTopRoute component={WritePage} path="/posttest/write" />
      <ScrollToTopRoute
        component={PostPage}
        path="/posttest/@:username/:postId"
      />
      {/* ----- Async request test pages ends ----- */}

      {/* ----- admin pages starts ----- */}
      {/* <Route component={PostsListPage} path="/firstavenue" exact /> */}
      <Route
        path="/firstavenue"
        name="Home"
        render={(props) => <TheLayout {...props} />}
      />
      <ScrollToTopRoute component={LoginPage} path="/firstavenue/login" />
      {/* <ScrollToTopRoute component={SignupPage} path="/firstavenue/signup" /> */}

      {/* ----- admin pages ends ----- */}

      <ScrollToTopRoute
        component={SummaryInKoreaPage}
        exact
        path="/produce-in-korea"
      />
      <ScrollToTopRoute
        component={SummaryOManualPage}
        exact
        path="/produce-o-manual"
      />
      <ScrollToTopRoute
        component={SummaryOMaticPage}
        exact
        path="/produce-o-matic"
      />
      <ScrollToTopRoute
        component={SummaryOPeoplePage}
        exact
        path="/produce-o-people"
      />

      <ScrollToTopRoute
        component={KoreaInANutshellPage}
        exact
        path="/produce-in-korea/korea-in-a-nutshell"
      />
      <ScrollToTopRoute
        component={PopularLocationsPage}
        exact
        path="/produce-in-korea/popular-locations"
      />
      <ScrollToTopRoute
        component={PopularLocationPage}
        exact
        path="/produce-in-korea/popular-locations/:id"
      />
      <ScrollToTopRoute
        component={SecurityHealthFoodPage}
        exact
        path="/produce-in-korea/security-health-food"
      />
      <ScrollToTopRoute
        component={TransportCommunicationPage}
        exact
        path="/produce-in-korea/transport-communication"
      />
      <ScrollToTopRoute
        component={LocationIncentivesPage}
        exact
        path="/produce-o-manual/location-incentives"
      />
      <ScrollToTopRoute
        component={PermitPage}
        exact
        path="/produce-o-manual/permit"
      />
      <ScrollToTopRoute
        component={ContractPage}
        exact
        path="/produce-o-manual/contract"
      />
      <ScrollToTopRoute
        component={InsurancePage}
        exact
        path="/produce-o-manual/insurance"
      />
      <ScrollToTopRoute
        component={RentalPage}
        exact
        path="/produce-o-manual/rental"
      />
      <ScrollToTopRoute
        component={BudgetResultPage}
        exact
        path="/produce-o-matic/budget-o-matic/result/:id"
      />
      <ScrollToTopRoute
        component={BudgetOMaticPage}
        exact
        path="/produce-o-matic/budget-o-matic"
      />
      <ScrollToTopRoute
        component={ProduceOMaticPage}
        exact
        path="/produce-o-matic/produce-o-matic"
      />
      <ScrollToTopRoute
        component={AccountOMaticPage}
        exact
        path="/produce-o-matic/account-o-matic"
      />
      <ScrollToTopRoute
        component={OurVisionPage}
        exact
        path="/produce-o-people/our-vision"
      />
      <ScrollToTopRoute
        component={PeopleOfTheMonthPage}
        exact
        path="/produce-o-people/people-of-the-month"
      />
      <ScrollToTopRoute
        component={BeOurPeoplePage}
        exact
        path="/produce-o-people/be-our-people"
      />
      <ScrollToTopRoute
        component={ContactPage}
        exact
        path="/produce-o-people/contact"
      />

      <ScrollToTopRoute
        exact
        path="/login"
        name="Login Page"
        render={(props) => <Login {...props} />}
      />
      <ScrollToTopRoute
        exact
        path="/register"
        name="Register Page"
        render={(props) => <Register {...props} />}
      />
      <ScrollToTopRoute
        exact
        path="/404"
        name="Page 404"
        render={(props) => <Page404 {...props} />}
      />
      <ScrollToTopRoute
        exact
        path="/500"
        name="Page 500"
        render={(props) => <Page500 {...props} />}
      />
      <ScrollToTopRoute exact component={MainPage} path="/" />
    </React.Suspense>
  );
};

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import PostsListPage from './pages/PostsListPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>PRODUCE-O-MATIC</title>
      </Helmet>
      <Route component={MainPage} path="/" />
      <Route
        component={PostsListPage}
        path={['/firstavenue/@:username', '/firstavenue/']}
        exact
      />
      <Route component={LoginPage} path="/firstavenue/login" />
      <Route component={SignupPage} path="/firstavenue/signup" />
      <Route component={WritePage} path="/firstavenue/write" />
      <Route component={PostPage} path="/firstavenue/@:username/:postId" />
    </>
  );
};

export default App;

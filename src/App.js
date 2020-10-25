import React from 'react';
import { Route } from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

const App = () => {
  return (
    <>
      <Route component={PostsListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={SignupPage} path="/signup" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
};

export default App;

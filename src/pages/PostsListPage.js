import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostsListContainer from '../containers/posts/PostsListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const PostsListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostsListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostsListPage;

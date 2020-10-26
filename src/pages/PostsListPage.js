import React from 'react';
import FirstAvnHeaderContainer from '../containers/common/FirstAvnHeaderContainer';
import PostsListContainer from '../containers/posts/PostsListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const PostsListPage = () => {
  return (
    <>
      <FirstAvnHeaderContainer />
      <PostsListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostsListPage;

import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';
import { Button } from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import Dropzone from 'react-dropzone';
import BasicDropzone from '../../components/BasicDropzone/BasicDropzone';
import { postFileUpload } from '../../modules/fileUpload';

const PostsListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { publishedDate, user, tags, title, body, _id } = post;
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/firstavenue/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const TestSpace = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ background: 'white' }}>
      <BasicDropzone />
      <Dropzone
        onDrop={(acceptedFiles) => {
          console.log(acceptedFiles);
          return dispatch(postFileUpload({ acceptedFiles }));
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
};

const PostsList = ({ posts, loading, error, showWriteButton }) => {
  // 에러 발생 시
  if (error) {
    return (
      <PostsListBlock>
        Error! We are working hard to solve this problem!
      </PostsListBlock>
    );
  }

  return (
    <PostsListBlock>
      <WritePostButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/firstavenue/write">
            새 글 작성하기
          </Button>
        )}
      </WritePostButtonWrapper>
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {!loading && posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
          <TestSpace />
        </div>
      )}
    </PostsListBlock>
  );
};

export default PostsList;

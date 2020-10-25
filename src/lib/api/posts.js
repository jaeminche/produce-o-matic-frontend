import qs from 'qs';
import client from './client';

export const writePost = ({ title, body, tags }) => {
  console.log('client: ', client, title);
  return client.post('/api/posts', { title, body, tags });
};

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`);
};

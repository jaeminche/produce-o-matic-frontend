import client from './client';

// export const writeGroup = ({ title, body, tags }) => {
//   console.log('client: ', client, title);
//   return client.post('/api/itemGroups', { title, body, tags });
// };

// export const readGroup = (id) => client.get(`/api/itemGroups/${id}`);

// export const listItemsGroups = () => client.get(`/api/itemsGroups`);

// export const postItemsGroups = ({ data }) =>
//   client.post('/api/budgetResult', { data });

// export const updateGroup = ({ id, title, body, tags }) =>
//   client.patch(`/api/itemGroups/${id}`, { title, body, tags });

// export const removeGroup = (id) => client.delete(`/api/itemGroups/${id}`);

export const listCategories = () => client.get(`/api/categories`);

export const addCategory = (data) =>
  client.post('/api/categories', { ...data });

export const addGroup = (data) => client.post('/api/itemsGroups', { ...data });

export const addItem = (data) => client.post('/api/budgetItems', { ...data });

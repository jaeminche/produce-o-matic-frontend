import client from './client';

// export const writeGroup = ({ title, body, tags }) => {
//   console.log('client: ', client, title);
//   return client.post('/api/itemGroups', { title, body, tags });
// };

// export const readGroup = (id) => client.get(`/api/itemGroups/${id}`);

// export const listItemsGroups = () => client.get(`/api/itemsGroups`);

export const postBudgetResult = ({ uuid, result }) =>
  client.post('/api/budgetResults', { uuid, result });

// export const updateGroup = ({ id, title, body, tags }) =>
//   client.patch(`/api/itemGroups/${id}`, { title, body, tags });

// export const removeGroup = (id) => client.delete(`/api/itemGroups/${id}`);

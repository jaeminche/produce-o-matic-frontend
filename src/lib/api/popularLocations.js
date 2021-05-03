import client from './client';

// export const writeGroup = ({ title, body, tags }) => {
//   console.log('client: ', client, title);
//   return client.post('/api/itemGroups', { title, body, tags });
// };

// export const readGroup = (id) => client.get(`/api/itemGroups/${id}`);

// export const listItemsGroups = () => client.get(`/api/itemsGroups`);

export const postPopularLocation = ({
  toggleDisplay,
  toggleDisplayOnMain,
  name,
  title,
  subtitle,
  youtubePath,
  text,
  thumbnail,
  // tags = ['popular-location'],
  baseUrl = '/produce-in-korea/popular-locations',
}) =>
  client.post('/api/popularLocations', {
    toggleDisplay,
    toggleDisplayOnMain,
    name,
    title,
    subtitle,
    youtubePath,
    text,
    thumbnail,
    // tags,
    baseUrl,
  });

export const listPopularLocations = (data) => {
  function writeParams(data) {
    let string = '';
    for (const [key, value] of Object.entries(data)) {
      string += `${key}=${value}&`;
    }
    return string;
  }

  return client.get(`/api/popularLocations?${data && writeParams(data)}`);
};

export const updatePopularLocation = ({
  id,
  toggleDisplay,
  toggleDisplayOnMain,
  name,
  title,
  subtitle,
  youtubePath,
  text,
  thumbnail,
  baseUrl = '/produce-in-korea/popular-locations',
}) =>
  client.patch(`/api/popularLocations/${id}`, {
    toggleDisplay,
    toggleDisplayOnMain,
    name,
    title,
    subtitle,
    youtubePath,
    text,
    thumbnail,
    baseUrl,
  });

export const removePopularLocation = (id) =>
  client.delete(`/api/popularLocations/${id}`);

import client from './client';

// export const writeGroup = ({ title, body, tags }) => {
//   console.log('client: ', client, title);
//   return client.post('/api/itemGroups', { title, body, tags });
// };

// export const readGroup = (id) => client.get(`/api/itemGroups/${id}`);

// export const listItemsGroups = () => client.get(`/api/itemsGroups`);

export const postPopularLocation = ({
  toggleDisplay = true,
  toggleDisplayOnMain = true,
  name = 'LocationIncentive',
  title = 'Test-Title',
  subtitle = 'test-subtitle',
  youtubePath = 'https://www.youtube.com/embed/joiGm8xre04',
  text = 'test-texts',
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

  console.log('==101', data, writeParams(data));
  return client.get(`/api/popularLocations?${writeParams(data)}`);
};

// export const updateGroup = ({ id, title, body, tags }) =>
//   client.patch(`/api/itemGroups/${id}`, { title, body, tags });

// export const removeGroup = (id) => client.delete(`/api/itemGroups/${id}`);

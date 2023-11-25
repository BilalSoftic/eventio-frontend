import { Alert } from 'react-native';

const apiBaseUrl = 'https://dc06-188-127-123-225.ngrok.io/api/';

fetchData = async (url, method, body) => {
  const token = '57|tk1fabSl0tjfdJIQqrZgL6U6zbICFSLigW3gSckv';
  console.log(apiBaseUrl + url)
  try {
    const response = await fetch(apiBaseUrl + url, {
      method,
      body: body ? body : null,

      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
    // throw error;
  }
};

export const registerUser = (user) => {
  fetchData('register', 'POST', user);
};

export const getAllEvents = () => {
  return fetchData('events', 'GET');
};

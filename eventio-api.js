import { Alert } from 'react-native';

/* const apiBaseUrl = 'https://3202-188-127-123-225.ngrok.io/'; */
const apiBaseUrl = 'http://192.168.0.18:8000/';

fetchData = async (url, method, body) => {
  const token = '4|5owGiyhKVato7pFzM0DjtLD4HZ4dHC2VVBY5aI1yc8be4f5c';
  console.log(apiBaseUrl + url);
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
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
    // throw error;
  }
};

export const registerUser = (user) => {
  fetchData('register', 'POST', JSON.stringify(user));
};

export const getAllEvents = () => {
  return fetchData('api/events', 'GET');
};

export const signIn = (user) => {
  return fetchData('login', 'POST', JSON.stringify(user));
};

export const getUserTags = () => {
  return fetchData('user-events', 'GET');
};

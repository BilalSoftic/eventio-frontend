import { Alert } from 'react-native';

const apiBaseUrl = 'https://3202-188-127-123-225.ngrok.io/';

fetchData = async (url, method, body) => {
  const token = '74|460Vsiy0I4hOaIrzCydKE0wZlJJvj8tyAdH09PY9';
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
    console.log(data);
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

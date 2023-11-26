import { Alert } from 'react-native';

const apiBaseUrl = 'https://4604-188-127-123-225.ngrok.io/';

fetchData = async (url, method, body) => {
  const token = '62|vGfHhnZlAqpp8fprWm0NQglgEXNvQfE2974OJRpP';
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
    console.log(body);
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

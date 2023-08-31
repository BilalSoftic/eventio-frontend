import { Alert } from 'react-native';

const apiBaseUrl = 'https://46d1-109-175-37-153.ngrok-free.app/api/';

fetchData = async (url, method, body) => {
  try {
    const response = await fetch(apiBaseUrl + url, {
      method,
      body: body ? body : null,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const jsonData = await response.json();
    Alert.alert(jsonData.title, jsonData.message);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const registerUser = (user) => {
  fetchData('register', 'POST', user);
};

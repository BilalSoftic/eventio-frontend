import { Alert } from 'react-native';
const apiBaseUrl = 'https://35d7-77-78-203-194.ngrok-free.app/';
import AsyncStorage from '@react-native-async-storage/async-storage';

fetchData = async (url, method, body, navigation) => {
  const token = await AsyncStorage.getItem('token');

  console.log('BASE URL: ', apiBaseUrl + url);
  console.log('METHOD: ', method);
  console.log('BODY: ', body);
  console.log('TOKEN: ', token);

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
    let data;

    if (response.status === 401) {
      AsyncStorage.removeItem('token');
      navigation.navigate('SignInPage');
      Alert.alert('Session expired', 'Please sign in again');
      return;
    }

    data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
    throw error;
  }
};

export const registerUser = (user) => {
  fetchData('register', 'POST', JSON.stringify(user));
};

export const getAllEvents = (navigation) => {
  return fetchData('api/events', 'GET', null, navigation);
};

export const signIn = (user) => {
  return fetchData('login', 'POST', JSON.stringify(user), null);
};

export const getUserTags = () => {
  return fetchData('api/user-events', 'GET');
};

export const getAllTags = () => {
  return fetchData('api/tags', 'GET');
};

export const setUserTags = (tags) => {
  return fetchData('api/user-tags', 'PATCH', JSON.stringify(tags), null);
};

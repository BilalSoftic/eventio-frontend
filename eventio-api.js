import { Alert } from 'react-native';
const apiBaseUrl = 'http://192.168.0.9:8000/';
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
    /* // Log the response content before parsing
    const responseText = await response.text();
    console.log('API Response:', responseText); */

    data = await response.json();
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
  return fetchData(
    'api/user-tags',
    'PATCH',
    JSON.stringify({ tag_ids: tags }),
    null
  );
};

export const postLike = (id, number) => {
  return fetchData(
    'api/post-like',
    'POST',
    JSON.stringify({ event_id: id, likeable_type: number }),
    null
  );
};
export const deleteLike = (id, number) => {
  return fetchData(
    'api/delete-like',
    'DELETE',
    JSON.stringify({ event_id: id, likeable_type: number }),
    null
  );
};

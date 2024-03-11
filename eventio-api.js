import { Alert } from 'react-native';

const apiBaseUrl = 'https://dae3-77-78-203-194.ngrok-free.app/';
import AsyncStorage from '@react-native-async-storage/async-storage';

fetchData = async (url, method, body, navigation) => {
  /* AsyncStorage.clear('token'); */
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
    let responseStatus;
    console.log('response status:', response.status);

    if (response.status === 401 && navigation) {
      AsyncStorage.removeItem('token');
      navigation.navigate('SignInPage');
      Alert.alert('Session expired', 'Please sign in again');
      return;
    }

    responseStatus = response.status;
    data = await response.json();
    return {
      data: data,
      status: responseStatus,
    };
  } catch (error) {
    console.log(JSON.stringify(error));
    throw error;
  }
};

export const signUp = (
  email,
  firstName,
  lastName,
  password,
  confirmPassword,
  phoneNumber,
  selectedDate
) => {
  return fetchData(
    'api/register',
    'POST',
    JSON.stringify({
      email,
      first_name: firstName,
      last_name: lastName,
      password,
      password_confirmation: confirmPassword,
      phone_number: phoneNumber,
      date_of_birth: selectedDate,
    }),
    null
  );
};
export const signIn = (user) => {
  return fetchData('login', 'POST', JSON.stringify(user), null);
};

export const getAllEvents = () => {
  return fetchData('api/events', 'GET');
};
export const getUserTags = (navigation) => {
  return fetchData('api/user-events', 'GET', null, navigation);
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

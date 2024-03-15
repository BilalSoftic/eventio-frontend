import React, { useCallback } from 'react';
import WelcomePage from './src/WelcomePage/WelcomePage';
import FirstSignUpPage from './src/FirstSignUpPage/FirstSignUpPage';
import SecondSignUpPage from './src/SecondSignUpPage/SecondSignUpPage';
import SignInPage from './src/SignInPage/SignInPage';
import InfoPage from './src/InfoPage/InfoPage';
import TagsPage from './src/TagsPage/TagsPage';
import MainPage from './src/MainPage/MainPage';
import SingleEventPage from './src/components/SingleEventPage/SingleEventPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// TODO:
// Sign Up page,user data handling
// Komponente za loading i error handling
// Like logika, ispravit error
// forgot password
// remember me
// Istestirat token logiku

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        /* initialRouteName='MainPage' */
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name='FirstSignUpPage' component={FirstSignUpPage} />
        <Stack.Screen name='SecondSignUpPage' component={SecondSignUpPage} /> */}
        {/*  <Stack.Screen name='WelcomePage' component={WelcomePage} />
        <Stack.Screen name='InfoPage' component={InfoPage} />
        <Stack.Screen name='TagsPage' component={TagsPage} />
        <Stack.Screen name='SignInPage' component={SignInPage} /> */}
        <Stack.Screen name='MainPage' component={MainPage} />
        <Stack.Screen name='SingleEventPage' component={SingleEventPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

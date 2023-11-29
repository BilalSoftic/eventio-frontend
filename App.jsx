import React, { useCallback } from 'react';
import WelcomeScreen from './src/WelcomeScreen/WelcomeScreen';
import FirstSignUpPage from './src/FirstSignUpPage/FirstSignUpPage';
import SecondSignUpPage from './src/SecondSignUpPage/SecondSignUpPage';
import SignInPage from './src/SignInPage/SignInPage';
import InfoPage from './src/InfoPage/InfoPage';
import TagsPage from './src/TagsPage/TagsPage';
import HomeScreen from './src/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import AllEvents from './src/components/AllEvents';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} /> */}
        {/* <Stack.Screen name='FirstSignUpPage' component={FirstSignUpPage} /> */}
        {/* <Stack.Screen name='SecondSignUpPage' component={SecondSignUpPage} /> */}
        {/*  <Stack.Screen name='SignInPage' component={SignInPage} /> */}
        {/* <Stack.Screen name='InfoPage' component={InfoPage} /> */}
        <Stack.Screen name='TagsPage' component={TagsPage} />
        {/* <Stack.Screen name='AllEvents' component={AllEvents} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

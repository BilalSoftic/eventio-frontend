import React, { useCallback } from 'react';
import WelcomeScreen from './src/WelcomeScreen/WelcomeScreen';
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
// 1. Pregledat i ispravit sve styling greske
// 2. Bosanski i engleski jezik
// 3. Search komponenta
// 4. Bottom bar (navigacija kroz aplikaciju sa menijem dole)
// 5. Single event page back i swipe down akcije
// 6. Profil stranica
// 7. Pripremit single event page za tagove
// 8. Komponente za loading i error handleing
// 9. Dodat skeleton loading
// 10. Sign up page
// 11. Rasporedit komponente
// 12. Navigacija kroz aplikaciju
// 13. Istestirat token logiku
// 14. Like logika
// 15. EventioCarousel , ubacit dugmad za lijevo i desno
// 16. Events of the venue you liked ??
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} /> */}
        {/*  <Stack.Screen name='FirstSignUpPage' component={FirstSignUpPage} /> */}
        {/*  <Stack.Screen name='SecondSignUpPage' component={SecondSignUpPage} /> */}
        {/*   <Stack.Screen name='SignInPage' component={SignInPage} /> */}
        <Stack.Screen name='MainPage' component={MainPage} />
        {/*  <Stack.Screen name='InfoPage' component={InfoPage} /> */}
        {/*  <Stack.Screen name='TagsPage' component={TagsPage} /> */}

        {/* <Stack.Screen name='SingleEventPage' component={SingleEventPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

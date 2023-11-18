import WelcomeScreen from './src/WelcomeScreen';
import FirstSignUpPage from './src/FirstSignUpPage';
import SecondSignUpPage from './src/SecondSignUpPage';
import SignInPage from './src/SignInPage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
/*  */

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="WelcomeScreen"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="FirstSignUpPage"
          options={{ headerShown: false }}
          component={FirstSignUpPage}
        /> */}
        <Stack.Screen
          name="SecondSignUpPage"
          options={{ headerShown: false }}
          component={SecondSignUpPage}
        />

        {/* <Stack.Screen
          name="SignInPage"
          options={{ headerShown: false }}
          component={SignInPage}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

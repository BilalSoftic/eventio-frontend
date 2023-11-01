import WelcomeScreen from './src/WelcomeScreen';
import FirstSignUpPage from './src/FirstSignUpPage';
/*  */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
/*  */

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="FirstSignUpPage"
          options={{ headerShown: false }}
          component={FirstSignUpPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

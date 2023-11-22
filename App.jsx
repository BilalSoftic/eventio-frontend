import WelcomeScreen from './src/WelcomeScreen/WelcomeScreen';
import FirstSignUpPage from './src/FirstSignUpPage/FirstSignUpPage';
import SecondSignUpPage from './src/SecondSignUpPage/SecondSignUpPage';
import SignInPage from './src/SignInPage/SignInPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="FirstSignUpPage" component={FirstSignUpPage} />
        <Stack.Screen name="SecondSignUpPage" component={SecondSignUpPage} />

        <Stack.Screen name="SignInPage" component={SignInPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React, { useCallback } from 'react';
import Registration from './src/Registration';
import HomeScreen from './src/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { config, GluestackUIProvider, ScrollView } from '@gluestack-ui/themed';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require('./assets/font/Roboto-Regular.ttf'),
    RobotoBold: require('./assets/font/Roboto-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GluestackUIProvider config={config.theme}>
      <ScrollView onLayout={onLayoutRootView}>
        <NavigationContainer>
          <HomeScreen />
          {/* <Registration /> */}
        </NavigationContainer>
      </ScrollView>
    </GluestackUIProvider>
  );
}

import Registration from './src/Registration';
import { NavigationContainer } from '@react-navigation/native';
import { config, GluestackUIProvider, Text } from '@gluestack-ui/themed';

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <NavigationContainer>
        <Registration />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import EventioHeading from './components/EventioHeading';
import { Image } from '@gluestack-ui/themed';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/hpbg.png')}
        style={{ width: '100%', height: 170 }}
      />
      <EventioHeading />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;

import React from 'react';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, ImageBackground } from 'react-native';
import EventioHeading from './components/EventioHeading';
import AllEvents from './components/AllEvents';

const HomeScreen = () => {
  useEffect(() => {
    // This is a side-effect, which is executed
    // after the component is rendered
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <EventioHeading />
      <AllEvents />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: 170,
  },
});

export default HomeScreen;

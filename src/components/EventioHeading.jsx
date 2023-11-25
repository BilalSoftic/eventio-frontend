import React from 'react';
import { Heading, Text, View } from '@gluestack-ui/themed';
import { StyleSheet, ImageBackground } from 'react-native';

const EventioHeading = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/hpbg.png')}
        style={styles.backgroundImage}
      >
        <Heading style={styles.heading}>
          <Text style={styles.text}>Eventio</Text>
        </Heading>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 170,
    position: 'relative',
    zIndex: 0, // Lower zIndex to send it to the background
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  heading: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  text: {
    fontFamily: 'RobotoBold',
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28,
    letterSpacing: 1,
  },
});

export default EventioHeading;

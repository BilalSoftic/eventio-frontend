import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Button from './components/Button';

function WelcomeScreen({ navigation }) {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [selectedFlag, setSelectedFlag] = useState(null);

  /* Page navigation */
  const navigateToFirstSignUpPage = () => {
    navigation.navigate('FirstSignUpPage');
  };
  return (
    <View style={styles.wrapper}>
      {/* BACKGROUND*/}
      <View style={styles.imageBox}>
        <Image
          style={styles.dotsStart}
          source={require('../assets/img/BackgroundDots.png')}
        />
        <Image
          style={styles.centerImg}
          source={require('../assets/img/Astronaut.png')}
        />
        <Image
          style={styles.dotsEnd}
          source={require('../assets/img/BackgroundDots.png')}
        />
      </View>

      {/* INTERACTIVE BOX */}
      <View style={styles.interactiveBox}>
        <Text style={styles.mainHeader}>Welcome</Text>
        <Text style={styles.secondaryHeader}>Choose your language</Text>
        <View style={styles.flagWrapper}>
          <TouchableOpacity
            style={[
              styles.flagButton,
              selectedFlag === 'bih'
                ? styles.selectedFlag
                : styles.unselectedFlag,
            ]}
            onPress={() => {
              setSelectedFlag('bih');
              setIsSubmitDisabled(false);
            }}
          >
            <Image
              id="bih"
              source={require('../assets/img/Flag_of_Bosnia_and_Herzegovina.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.flagButton,
              selectedFlag === 'uk'
                ? styles.selectedFlag
                : styles.unselectedFlag,
            ]}
            onPress={() => {
              setSelectedFlag('uk');
              setIsSubmitDisabled(false);
            }}
          >
            <Image
              id="uk"
              source={require('../assets/img/Flag_of_the_United_Kingdom.png')}
            />
          </TouchableOpacity>
        </View>
        <Image style={styles.dots} source={require('../assets/img/Dots.png')} />
        <Button
          styleType="welcomeScreenButton"
          disabled={isSubmitDisabled}
          onPress={navigateToFirstSignUpPage}
          text="Next"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#004972',
  },
  imageBox: {
    flex: 2,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsStart: {
    position: 'absolute',
    top: 50,
    right: 0,
  },
  centerImg: {
    position: 'absolute',
    top: '23%',
    right: '5%',
  },
  dotsEnd: {
    position: 'absolute',
    bottom: -10,
    left: 0,
  },

  interactiveBox: {
    flex: 1.3,
    padding: 25,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
  },
  mainHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  secondaryHeader: {
    fontSize: 16,
    marginTop: 15,
    opacity: 0.5,
    alignSelf: 'center',
  },
  flagWrapper: {
    marginTop: 20,
    gap: 35,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  selectedFlag: {
    opacity: 1,
  },
  unselectedFlag: {
    opacity: 0.5,
  },

  dots: {
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default WelcomeScreen;

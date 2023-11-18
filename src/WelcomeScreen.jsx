import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import ButtonComponent from './components/ButtonComponent';

function WelcomeScreen({ navigation }) {
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [selectedFlag, setSelectedFlag] = useState(null);

  /* Page navigation */
  const navigateToFirstSignUpPage = () => {
    navigation.navigate('FirstSignUpPage');
  };
  return (
    <View style={styles.containerStyle}>
      {/* BACKGROUND*/}
      <View style={styles.backgroundImageStyle}>
        <Image
          style={styles.dotsStartStyle}
          source={require('../assets/img/BackgroundDots.png')}
        />
        <Image
          style={styles.centerImgStyle}
          source={require('../assets/img/Astronaut.png')}
        />
        <Image
          style={styles.dotsEndStyle}
          source={require('../assets/img/BackgroundDots.png')}
        />
      </View>

      {/* INTERACTIVE BOX */}
      <View style={styles.interactiveContainerStyle}>
        <Text style={styles.mainHeaderTextStyle}>Welcome</Text>
        <Text style={styles.secondaryHeaderTextStyle}>
          Choose your language
        </Text>
        {/* FLAGS  */}
        <View style={styles.flagSelectorStyle}>
          <TouchableOpacity
            style={[
              styles.flagButtonStyle,
              selectedFlag === 'bih'
                ? styles.selectedFlagStyle
                : styles.unselectedFlagStyle,
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
              styles.flagButtonStyle,
              selectedFlag === 'uk'
                ? styles.selectedFlagStyle
                : styles.unselectedFlagStyle,
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
        <Image
          style={styles.dotsImageStyle}
          source={require('../assets/img/Dots.png')}
        />
        <ButtonComponent
          styleType="welcomeScreenButtonStyle"
          disabled={isSubmitDisabled}
          onPress={navigateToFirstSignUpPage}
          text="Next"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#004972',
  },
  backgroundImageStyle: {
    flex: 2,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsStartStyle: {
    position: 'absolute',
    top: 50,
    right: 0,
  },
  centerImgStyle: {
    position: 'absolute',
    top: '23%',
    right: '5%',
  },
  dotsEndStyle: {
    position: 'absolute',
    bottom: -10,
    left: 0,
  },

  interactiveContainerStyle: {
    flex: 1.3,
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
  },
  mainHeaderTextStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  secondaryHeaderTextStyle: {
    marginBottom: 20,
    fontSize: 16,
    opacity: 0.5,
    alignSelf: 'center',
  },
  flagSelectorStyle: {
    marginBottom: 20,
    gap: 35,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  selectedFlagStyle: {
    opacity: 1,
  },
  unselectedFlagStyle: {
    opacity: 0.5,
  },

  dotsImageStyle: {
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default WelcomeScreen;

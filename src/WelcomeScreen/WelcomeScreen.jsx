import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './WelcomeScreenStyle';
import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';

const imgPath = '../../assets/img/';

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
          source={require(imgPath + 'BackgroundDots.png')}
        />
        <Image
          style={styles.centerImgStyle}
          source={require(imgPath + 'Astronaut.png')}
        />
        <Image
          style={styles.dotsEndStyle}
          source={require(imgPath + 'BackgroundDots.png')}
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
              source={require(imgPath + 'Flag_of_Bosnia_and_Herzegovina.png')}
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
              source={require(imgPath + 'Flag_of_the_United_Kingdom.png')}
            />
          </TouchableOpacity>
        </View>
        <Image
          style={styles.dotsImageStyle}
          source={require(imgPath + 'Dots.png')}
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

export default WelcomeScreen;

import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './WelcomePageStyle';
import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
const imgPath = '../../assets/img/';

function WelcomePage() {
  const navigation = useNavigation();

  /* State */
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
        <View style={styles.flagSelectorContainerStyle}>
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
              style={styles.flagImageStyle}
              id='bih'
              source={require(imgPath + 'FlagBiH.png')}
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
              style={styles.flagImageStyle}
              id='uk'
              source={require(imgPath + 'FlagUK.png')}
            />
          </TouchableOpacity>
        </View>

        <ButtonComponent
          disabled={isSubmitDisabled}
          onPress={navigateToFirstSignUpPage}
          text='Next'
        />
      </View>
    </View>
  );
}

export default WelcomePage;

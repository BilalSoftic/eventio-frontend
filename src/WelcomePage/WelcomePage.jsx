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
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  /* Page navigation */
  const handleSubmitLanguage = () => {
    navigation.navigate('InfoPage', { selectedLanguage });
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
              selectedLanguage === 'bih'
                ? styles.selectedFlagStyle
                : styles.unselectedFlagStyle,
            ]}
            onPress={() => {
              setSelectedLanguage('bih');
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
              selectedLanguage === 'eng'
                ? styles.selectedFlagStyle
                : styles.unselectedFlagStyle,
            ]}
            onPress={() => {
              setSelectedLanguage('eng');
              setIsSubmitDisabled(false);
            }}
          >
            <Image
              style={styles.flagImageStyle}
              id='eng'
              source={require(imgPath + 'FlagUK.png')}
            />
          </TouchableOpacity>
        </View>

        <ButtonComponent
          disabled={isSubmitDisabled}
          onPress={handleSubmitLanguage}
          text='Next'
        />
      </View>
    </View>
  );
}

export default WelcomePage;

import { View, Text, Image } from 'react-native';
import styles from './InfoPageStyle';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import DotComponent from '../components/DotComponent/DotComponent';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
const imgPath = '../../assets/img/';

function InfoPage({ route }) {
  const [language, setLanguage] = useState('eng');

  useEffect(() => {
    console.log('language Info page', route.params.selectedLanguage);
    setLanguage(route.params.selectedLanguage);
  }, []);

  /* Page navigation */
  const navigation = useNavigation();
  const navigateToNextPage = () => {
    navigation.navigate('TagsPage', { language });
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
          source={require(imgPath + 'Looking.png')}
        />
        <Image
          style={styles.dotsEndStyle}
          source={require(imgPath + 'BackgroundDots.png')}
        />
      </View>

      {/* INTERACTIVE BOX */}
      <View style={styles.interactiveContainerStyle}>
        <Text style={styles.mainHeaderTextStyle}>
          {language === 'bih' ? 'Traži događaje' : 'Search for events'}
        </Text>
        <Text style={styles.mainTextStyle}>
          {language === 'bih'
            ? 'Naša aplikacija će vam omogućiti da budete u toku s najnovijim događajima, koncertima, izložbama, sportskim manifestacijama i drugim aktivnostima koje vas zanimaju.'
            : 'Our application will allow you to stay up to date with the latest events, concerts, exhibitions, sports events, and other activities that interest you.'}
        </Text>

        <View style={styles.dotsContainerStyle}>
          <DotComponent size={15} backgroundColor={'#004972'} />
          <DotComponent size={15} backgroundColor={'#C1C9DC'} />
        </View>
        <ButtonComponent
          onPress={navigateToNextPage}
          text={language === 'bih' ? 'Nastavi' : 'Next'}
        />
      </View>
    </View>
  );
}

export default InfoPage;

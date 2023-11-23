import { View, Text, Image } from 'react-native';
import styles from './SecondInfoPageStyle';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';

const imgPath = '../../assets/img/';

function SecondInfoPage({ navigation }) {
  /* Page navigation */
  /*  const navigateToThirdInfoPage = () => {
    navigation.navigate('ThirdInfoPage');
  }; */
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
        <Text style={styles.mainHeaderTextStyle}>Traži Event</Text>
        <Text style={styles.mainText}>
          Naša aplikacija će vam omogućiti da budete u toku s najnovijim
          događajima, koncertima, izložbama, sportskim manifestacijama i mnogo
          čimbenim aktivnostima koje vas zanimaju.
        </Text>
        <Image
          style={styles.dotsImageStyle}
          source={require(imgPath + 'Dots.png')}
        />
        <ButtonComponent
          styleType="welcomeScreenButtonStyle"
          /*    onPress={navigateToThirdInfoPage} */
          text="Next"
        />
      </View>
    </View>
  );
}

export default SecondInfoPage;

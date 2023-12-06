import { View, Text, Image } from 'react-native';
import styles from './InfoPageStyle';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import DotComponent from '../components/DotComponent/DotComponent';
const imgPath = '../../assets/img/';

function InfoPage({ navigation }) {
  /* Page navigation */
  /*  const navigateToTagsPage = () => {
    navigation.navigate('TagsPage');
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

        <View style={styles.dotsContainer}>
          <DotComponent size={15} backgroundColor={'#004972'} />
          <DotComponent size={15} backgroundColor={'#C1C9DC'} />
        </View>
        <ButtonComponent
          /*    onPress={navigateToTagsPage} */
          text='Next'
        />
      </View>
    </View>
  );
}

export default InfoPage;

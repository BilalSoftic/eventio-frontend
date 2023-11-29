import { View, Text, Image } from 'react-native';
import styles from './TagsPageStyle';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import DotComponent from '../components/DotComponent/DotComponent';
import TagComponent from '../components/TagComponent/TagComponent';
const imgPath = '../../assets/img/';

function TagsPage({ navigation }) {
  /* Page navigation */
  /*  const navigateTo = () => {
    navigation.navigate('');
  }; */
  return (
    <View style={styles.containerStyle}>
      {/* BACKGROUND*/}
      <View style={styles.backgroundImageStyle}>
        <Image
          style={styles.dotsStartStyle}
          source={require(imgPath + 'BackgroundDots.png')}
        />
        <View style={styles.tagsContainer}>
          <TagComponent />
        </View>
        <Image style={styles.arrow} source={require(imgPath + 'Arrow.png')} />
        <Image
          style={styles.dotsEndStyle}
          source={require(imgPath + 'BackgroundDots.png')}
        />
      </View>

      {/* INTERACTIVE BOX */}
      <View style={styles.interactiveContainerStyle}>
        <Text style={styles.mainHeaderTextStyle}>Izaberi Kategoriju</Text>
        <Text style={styles.mainText}>
          Naša aplikacija će vam omogućiti da budete u toku s najnovijim
          događajima, koncertima, izložbama, sportskim manifestacijama i mnogo
          čimbenim aktivnostima koje vas zanimaju.
        </Text>

        <View style={styles.dotsContainer}>
          <DotComponent size={15} backgroundColor={'#C1C9DC'} />
          <DotComponent size={15} backgroundColor={'#004972'} />
        </View>
        <ButtonComponent
          /*    onPress={navigateTo} */
          text='Next'
        />
      </View>
    </View>
  );
}

export default TagsPage;

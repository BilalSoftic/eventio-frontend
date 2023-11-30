import { View, Text, Image } from 'react-native';
import styles from './MainPageStyle';
import EventioCarousel from '../components/EventioCarousel/EventioCarousel';
const imagePath = '../../assets/img/';
const MainPage = ({}) => {
  return (
    <View style={styles.containerStyle}>
      {/* HEADER */}
      <View style={styles.headerStyle}>
        <Text style={styles.headingStyle}>Eventio</Text>
        <Image
          style={styles.dotsStyle}
          source={require(imagePath + 'BackgroundDots.png')}
        />
      </View>
      {/* CAROUSEL */}
      <View style={styles.contentContainerStyle}>
        <View style={styles.carouselContainerStyle}>
          <EventioCarousel />
        </View>
      </View>
    </View>
  );
};
export default MainPage;

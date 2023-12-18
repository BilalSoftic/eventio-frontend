import { View, Text, Image, ScrollView } from 'react-native';
import styles from './MainPageStyle';
import EventioCarousel from '../components/EventioCarousel/EventioCarousel';
import AllEvents from '../components/AllEvents';
import HorizontalScrollComponent from '../components/HorizontalScrollComponent/HorizontalScrollComponent';

const imagePath = '../../assets/img/';
const MainPage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerStyle}>
        <Text style={styles.headingStyle}>Eventio</Text>
        <Image
          style={styles.dotsStyle}
          source={require(imagePath + 'BackgroundDots.png')}
        />
      </View>
      {/* CAROUSEL */}

      <View style={styles.carouselContainerStyle}>
        <EventioCarousel />
      </View>
      {/* HORIZONTAL SCROLL */}
      <View style={styles.horizontalScrollsContainerStyle}>
        <HorizontalScrollComponent />
      </View>

      <View style={styles.allEventsContainerStyle}>
        <AllEvents />
      </View>
    </ScrollView>
  );
};
export default MainPage;

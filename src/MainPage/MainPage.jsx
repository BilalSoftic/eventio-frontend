import { View, Text, Image, ScrollView } from 'react-native';
import styles from './MainPageStyle';
import EventioCarousel from '../components/EventioCarousel/EventioCarousel';
import AllEvents from '../components/AllEvents';
import HorizontalScrollComponent from '../components/HorizontalScrollComponent/HorizontalScrollComponent';
const imagePath = '../../assets/img/';
const MainPage = () => {
  return (
    <View style={styles.containerStyle}>
      <ScrollView>
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
          {/* HORIZONTAL SCROLL */}
          <View style={styles.horizontalScrollsContainerStyle}>
            <HorizontalScrollComponent title={'muzika'} />
            <HorizontalScrollComponent title={'teatar'} />
            <HorizontalScrollComponent title={'sport'} />
          </View>
          <View style={styles.allEventsContainerStyle}>
            <AllEvents />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default MainPage;

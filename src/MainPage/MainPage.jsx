import { View, Text, Image, ScrollView } from 'react-native';
import styles from './MainPageStyle';
import EventioCarousel from '../components/EventioCarousel/EventioCarousel';
import SingleEventComponent from '../components/SingleEventComponent/SingleEventComponent';
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
        {/* HORIZONTAL SCROLL */}
        <View style={styles.horizontalScrollContainerStyle}>
          <View style={styles.HorizontalScrollHeaderStyle}>
            <Text style={styles.horizontalScrollHeading}>Muzika</Text>
          </View>
          <ScrollView style={styles.horizontalScrollStyle} horizontal={true}>
            <SingleEventComponent />
            <SingleEventComponent />
            <SingleEventComponent />
            <SingleEventComponent />
            <SingleEventComponent />
            <SingleEventComponent />
            <SingleEventComponent />
            <SingleEventComponent />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
export default MainPage;

import { View, Text, Image, ScrollView } from 'react-native';
import styles from './MainPageStyle';
import EventioCarousel from '../components/EventioCarousel/EventioCarousel';
import AllEvents from '../components/AllEvents';
import HorizontalScrollComponent from '../components/HorizontalScrollComponent/HorizontalScrollComponent';
import { useEffect, useState } from 'react';
import { getUserTags } from '../../eventio-api';

const imagePath = '../../assets/img/';
const MainPage = () => {
  const [userTags, setUserTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserTags().then((res) => {
      setUserTags(res);
      // console.log('result', JSON.stringify(res));
      setLoading(false);
      // console.log('res', res);
    });
  }, []);

  if (loading) {
    return (
      <View style={styles.wrapper}>
        <Text>Loading...</Text>
      </View>
    );
  }

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
      {userTags.map((tag, i) => {
        return (
          <View key={i} style={styles.horizontalScrollsContainerStyle}>
            <View style={styles.containerI}>
              <View style={styles.HorizontalScrollHeaderStyle}>
                <Text style={styles.horizontalScrollHeading}>{tag.name}</Text>
              </View>
              <HorizontalScrollComponent events={tag.events} />
            </View>
          </View>
        );
      })}

      <View style={styles.allEventsContainerStyle}>
        <AllEvents />
      </View>
    </ScrollView>
  );
};
export default MainPage;

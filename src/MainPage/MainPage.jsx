import { View, Text, Image, ScrollView, RefreshControl } from 'react-native';
import styles from './MainPageStyle';
import EventioCarousel from '../components/EventioCarousel/EventioCarousel';
import AllEventsComponent from '../components/AllEventsComponent/AllEventsComponent';
import HorizontalScrollComponent from '../components/HorizontalScrollComponent/HorizontalScrollComponent';
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';

import { useEffect, useState } from 'react';
import { getUserTags } from '../../eventio-api';

const imagePath = '../../assets/img/';
const MainPage = () => {
  const [userTags, setUserTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  /* Refresh page */
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  useEffect(() => {
    getUserTags().then((res) => {
      setUserTags(res);
      console.log('got userTags');
      setLoading(false);
    });
  }, [refreshing]);

  /* loading */
  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.containerStyle}
    >
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
        <Text style={styles.allEventsHeaderStyle}>All Events</Text>
        <AllEventsComponent />
      </View>
    </ScrollView>
  );
};
export default MainPage;

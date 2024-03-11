import { View, Text, Image, ScrollView, RefreshControl } from 'react-native';
import styles from './MainPageStyle';
import EventioCarousel from '../components/EventioCarousel/EventioCarousel';
import AllEventsComponent from '../components/AllEventsComponent/AllEventsComponent';
import HorizontalScrollComponent from '../components/HorizontalScrollComponent/HorizontalScrollComponent';
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';
import MessageModalComponent from '../components/MessageModalComponent/MessageModalComponent';

import { useEffect, useState } from 'react';
import { getUserTags } from '../../eventio-api';
import { useNavigation } from '@react-navigation/native';

const imagePath = '../../assets/img/';
const MainPage = () => {
  const [userTags, setUserTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isMessage, setIsMessage] = useState('');

  const navigation = useNavigation();
  /* Refresh page */
  const onRefresh = () => {
    console.log('REFRESHING');
    setRefreshing(true);
    const clearRefreshTimeout = setTimeout(() => {
      setRefreshing(false);
    }, 500);

    return () => clearTimeout(clearRefreshTimeout);
  };
  useEffect(() => {
    getUserTags(navigation)
      .then((res) => {
        if (res.status !== 200) {
          setLoading(false);
          setIsError(true);
          setIsMessage(res.data.message);
        } else {
          setUserTags(res.data);
          console.log('got userTags');
          console.log(res.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        setIsError(true);
        setIsMessage(error);
      });
  }, [refreshing]);

  /* message modal */
  const handleCloseModal = () => {
    setIsError(false);
  };

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
      {/* Error and  message rendering */}
      <MessageModalComponent
        message={isMessage}
        isVisible={isError}
        closeModal={handleCloseModal}
      />

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
        <AllEventsComponent refreshing={refreshing} />
      </View>
    </ScrollView>
  );
};
export default MainPage;

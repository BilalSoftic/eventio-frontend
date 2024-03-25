import React from 'react';
import { View, Text, Image, ScrollView, RefreshControl } from 'react-native';

import styles from './MainPageStyle';
import EventioCarousel from '../components/EventioCarousel/EventioCarousel';
import AllEventsComponent from '../components/AllEventsComponent/AllEventsComponent';
import HorizontalScrollComponent from '../components/HorizontalScrollComponent/HorizontalScrollComponent';
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';
import MessageModalComponent from '../components/MessageModalComponent/MessageModalComponent';
import { useFocusEffect } from '@react-navigation/native';

import { useEffect, useState } from 'react';
import { getAllEvents, getUserTags } from '../../eventio-api';
import { useNavigation } from '@react-navigation/native';

const imagePath = '../../assets/img/';
const MainPage = ({ route }) => {
  const [userTags, setUserTags] = useState([]);
  const [loading, setLoading] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isMessage, setIsMessage] = useState('');
  const [loadMoreData, setLoadMoreData] = useState(false);

  const navigation = useNavigation();
  /* Refresh page */

  const onRefresh = () => {
    console.log('REFRESHING');
    setRefreshing(true);
    loadData();
    const clearRefreshTimeout = setTimeout(() => {
      setRefreshing(false);
    }, 2000);

    return () => clearTimeout(clearRefreshTimeout);
  };

  const loadData = () => {
    setLoading(true);
    getUserTags(navigation)
      .then((res) => {
        if (res.status !== 200) {
          setLoading(false);
          setIsError(true);
          setIsMessage(res.data.message);
        } else {
          setUserTags(res.data);
          console.log('got userTags', res.data);

          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        setIsError(true);
        setIsMessage(error);
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      console.log('route?.params?.didChange:', route?.params?.didChange);
      if (route?.params?.didChange === true) {
        loadData();
      }
    }, [route?.params?.didChange])
  );

  /* message modal */
  const handleCloseModal = () => {
    setIsError(false);
  };

  /* scroll end */
  const handleScrollEnd = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20;
    if (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    ) {
      setLoadMoreData(true);
      setTimeout(() => {
        setLoadMoreData(false);
      }, 1000);
    } else {
      setLoadMoreData(false);
    }
  };
  /* loading */
  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <ScrollView
      onScroll={handleScrollEnd}
      scrollEventThrottle={400}
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
        <AllEventsComponent
          refreshing={refreshing}
          loadMoreData={loadMoreData}
        />
      </View>
    </ScrollView>
  );
};
export default MainPage;

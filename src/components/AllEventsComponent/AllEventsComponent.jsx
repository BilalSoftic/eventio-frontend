import React, { useEffect, useState, useRef } from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import styles from './AllEventsComponentStyle';
import { getAllEvents } from '../../../eventio-api';
import { formatDate, formatTime } from '../../../helpers';
import { useNavigation } from '@react-navigation/native';

const AllEventsComponent = () => {
  const navigation = useNavigation();
  const allEventsContainer = useRef({});

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isGetError, setIsGetError] = useState(false);

  useEffect(() => {
    allEventsContainer.current = {
      flex: 1,
      backgroundColor: '#fff',
    };

    getAllEvents(navigation)
      .then((response) => {
        setEvents(response.data.data);
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        setIsGetError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#007BFF' />
      </View>
    );
  }

  if (isGetError) {
    return (
      <View style={styles.errorContainer}>
        <Text>ERROROROROROOR</Text>
      </View>
    );
  }

  return (
    <View style={styles.containerStyle}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {events.map((event) => (
          <View key={event.id} style={styles.eventContainer}>
            {/*  {console.log('Event1: ', event)} */}
            <ImageBackground
              source={{ uri: event.media[0]?.display_image }}
              resizeMode='cover'
              borderRadius={22.92}
              style={styles.eventImageStyle}
            />
            <View style={styles.eventDetailsStyle}>
              <Text style={styles.eventDateStyle}>
                {formatDate(new Date(event.end_date))} u{' '}
                {formatTime(new Date(event.end_date))}
              </Text>
              <Text style={styles.eventNameStyle}>{event.name}</Text>
              <Text style={styles.eventAddressStyle}>{event.address}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default AllEventsComponent;

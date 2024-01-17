import React, { useEffect, useState, useRef } from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
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
  const handleEventPress = (event) => {
    navigation.navigate('SingleEventPage', { event });
  };

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
          <TouchableOpacity
            key={event.id}
            style={styles.eventContainer}
            onPress={() => handleEventPress(event)}
          >
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
              <Text style={styles.eventAddress}>{event.address}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AllEventsComponent;

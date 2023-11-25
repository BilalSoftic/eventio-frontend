import React, { useEffect, useState, useRef } from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { getAllEvents } from '../../eventio-api';
import { Text, Box } from '@gluestack-ui/themed';
import { formatDate, formatTime } from '../../helpers';

const AllEvents = () => {
  const allEventsContainer = useRef({});

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    allEventsContainer.current = {
      flex: 1,
      backgroundColor: '#fff',
    };

    getAllEvents()
      .then((response) => {
        console.log(response)
        setEvents(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
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

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {console.log(events)}
        {events.map((event) => (
          <View key={event.id} style={styles.eventContainer}>
            <ImageBackground
              source={{ uri: event.media[0].display_image }}
              resizeMode='cover'
              borderRadius={22.92}
              style={styles.eventImage}
            />
            <Box style={styles.eventDetails}>
              <Text style={styles.eventDate}>
                {formatDate(new Date(event.end_date))} u{' '}
                {formatTime(new Date(event.end_date))}
              </Text>
              <Text style={styles.eventName}>{event.name}</Text>
              <Text style={styles.eventAddress}>{event.address}</Text>
            </Box>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    bottom: 90,
    zIndex: 2,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventContainer: {
    position: 'relative',
    backgroundColor: '#F0FAFF',
    margin: 16,
    borderRadius: 22.92,
  },
  eventImage: {
    height: 384.98,
    borderRadius: 22.92,
  },
  eventDetails: {
    height: 142,
    width: '100%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 22.92,
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowColor: '#333333',
    shadowOffset: {
      width: 2.046511650085449,
      height: 2.046511650085449,
    },
    shadowOpacity: 0.12156862765550613,
    shadowRadius: 22.920930862426758,
    elevation: 3,
  },
  eventDate: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 15.73,
    color: '#0C6A9F',
  },
  eventName: {
    fontSize: 26,
    fontWeight: 600,
    lineHeight: 28,
    color: '#333333',
  },
  eventAddress: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 15.73,
  },
});

export default AllEvents;

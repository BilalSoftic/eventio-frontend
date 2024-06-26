import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './AllEventsComponentStyle';
import { getAllEvents } from '../../../eventio-api';
import { formatDate, formatTime } from '../../../helpers';
import { useNavigation } from '@react-navigation/native';
import HeartIcon from './HeartIcon';
import Icon from 'react-native-vector-icons/FontAwesome';
import { postLike, deleteLike } from '../../../eventio-api';
import LoadingComponent from '../LoadingComponent/LoadingComponent';

const imagePath = '../../../assets/';

const AllEventsComponent = ({ refreshing, loadMoreData }) => {
  const navigation = useNavigation();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  console.log(loadMoreData);
  /* on load */
  useEffect(() => {
    console.log(loadMoreData);
    console.log('refreshing AllEvents');
    getAllEvents(1)
      .then((response) => {
        setEvents(response.data.data.data);
        console.log('getAllEvents Response:', response);
        setLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        console.log('AllEvents error:', error);
        setLoading(false);
      });
  }, [refreshing]);

  /* Navigate to SingleEventPage */
  const handleEventPress = (event) => {
    navigation.navigate('SingleEventPage', { event });
  };

  /* Handle Like*/
  const handleLikeButton = (id) => {
    let singleEvent;
    const updatedData = events.map((event) => {
      if (event.id === id) {
        singleEvent = event;
      }
      return event.id === id
        ? { ...event, display_like: !event.display_like }
        : event;
    });
    setEvents(updatedData);

    if (!singleEvent.display_like) {
      postLike(singleEvent.id, 0).catch((error) => console.log(error));
      console.log('liked event id:', singleEvent.id);
    } else {
      deleteLike(singleEvent.id, 0).catch((error) => console.log(error));
      console.log('unlinked event id:', singleEvent.id);
    }
  };

  /* loading */
  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      {events.map((event) => (
        <TouchableOpacity
          style={styles.singleEventContainerStyle}
          key={event.id}
          onPress={() => handleEventPress(event)}
        >
          <View style={styles.backgroundImageContainerStyle}>
            <Image
              style={styles.backgroundImageStyle}
              source={require(imagePath + 'placeholder.png')}
            />

            <TouchableOpacity
              style={styles.heartButton}
              onPress={() => handleLikeButton(event.id)}
            >
              <HeartIcon iconName={event.display_like ? 'heart' : 'heart-o'} />
            </TouchableOpacity>
          </View>
          <View style={styles.informationContainerStyle}>
            <Text style={styles.dateStyle}>
              {formatDate(new Date(event.start_date))} u{' '}
              {formatTime(new Date(event.start_date))}
            </Text>
            <Text style={styles.titleStyle}>{event.name}</Text>
            <View style={styles.locationStyle}>
              <Icon name={'map-pin'} style={styles.locationIconStyle} />
              <Text style={styles.locationTextStyle}>{event.address}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

export default AllEventsComponent;

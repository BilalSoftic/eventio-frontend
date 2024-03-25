import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import styles from './HorizontalScrollComponentStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { formatDate, formatTime } from '../../../helpers';
import { useNavigation } from '@react-navigation/native';
import HeartIcon from './HeartIcon';
import { postLike, deleteLike } from '../../../eventio-api';

const imagePath = '../../../assets/';

const HorizontalScrollComponent = ({ events }) => {
  const navigation = useNavigation();
  const [userTagEvents, setUserTagEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUserTagEvents(events);
    setLoading(false);
  }, []);

  const handleEventPress = (event) => {
    navigation.navigate('SingleEventPage', { event });
  };
  const handleLikeButton = (id) => {
    let singleEvent;
    const updatedData = userTagEvents.map((event) => {
      if (event.id === id) {
        singleEvent = event;
      }

      return event.id === id
        ? { ...event, display_like: !event.display_like }
        : event;
    });

    setUserTagEvents(updatedData);

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
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size='large' color='#004972' />
      </View>
    );
  }
  return (
    <ScrollView horizontal={true}>
      {userTagEvents.map((event) => (
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
    </ScrollView>
  );
};

export default HorizontalScrollComponent;

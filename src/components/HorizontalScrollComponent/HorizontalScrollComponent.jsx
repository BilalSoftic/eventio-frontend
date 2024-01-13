import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import styles from './HorizontalScrollComponentStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect, useState } from 'react';
import { getUserTags } from '../../../eventio-api';
import { formatDate, formatTime } from '../../../helpers';
import { useNavigation } from '@react-navigation/native';
import HeartIcon from './HeartIcon';

const imagePath = '../../../assets/';

const HorizontalScrollComponent = ({ events }) => {
  const navigation = useNavigation();
  const [userTagEvents, setUserTagEvents] = useState([]);

  useEffect(() => {
    setUserTagEvents(events);
    console.log('tag', events);
  }, []);

  const handleEventPress = (event) => {
    navigation.navigate('SingleEventPage', { event });
  };
  const handleLikeButton = (id) => {
    // const updatedData = data.map((item) =>
    //   item.id === id ? { ...item, liked: !item.liked } : item
    // );
    // setData(updatedData);
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

    if (singleEvent.display_like) {
      // AKO JE TRUE ONDA OPALIT POST
      console.log(singleEvent.id);
    } else {
      // OPALIT DELETE
      console.log(singleEvent.id);
    }

    console.log(singleEvent);
  };

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

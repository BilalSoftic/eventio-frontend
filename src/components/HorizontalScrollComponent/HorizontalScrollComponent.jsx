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

const imagePath = '../../../assets/';

const HorizontalScrollComponent = () => {
  const navigation = useNavigation();
  const [userTags, setUserTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserTags().then((res) => {
      setUserTags(res);
      console.log('result', JSON.stringify(res));
      setLoading(false);
    });
  }, []);

  const handleEventPress = (event) => {
    navigation.navigate('SingleEventPage', { event });
  };
  /*   const handleLikeButton = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, liked: !item.liked } : item
    );
    setData(updatedData);
  }; */

  if (loading) {
    return (
      <View style={styles.wrapper}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      {userTags.map((tag, i) => (
        <View key={i} style={styles.container}>
          <View style={styles.HorizontalScrollHeaderStyle}>
            <Text style={styles.horizontalScrollHeading}>{tag.name}</Text>
          </View>
          <ScrollView horizontal={true}>
            {tag.events.map((event) => (
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
                  {/*
                  <TouchableOpacity
                    style={styles.heartButton}
                    onPress={() => handleLikeButton(id)}
                  >
                    <Icon
                      name={liked ? 'heart' : 'heart-o'}
                      style={styles.heartIcon}
                    />
                  </TouchableOpacity>
                  */}
                </View>
                <View style={styles.informationContainerStyle}>
                  <Text style={styles.dateStyle}>
                    {formatDate(new Date(event.start_date))} u{' '}
                    {formatTime(new Date(event.start_date))}
                  </Text>
                  <Text style={styles.titleStyle}>{event.name}</Text>
                  <View style={styles.locationStyle}>
                    <Icon name={'map-pin'} style={styles.locationIconStyle} />
                    <Text style={styles.locationTextStyle}>
                      {event.address}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ))}
    </View>
  );
};

export default HorizontalScrollComponent;

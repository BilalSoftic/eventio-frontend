import {
  View,
  Text,
  ScrollView,
  Image,
  PanResponder,
  Animated,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import styles from './SingleEventPageStyle';
import StaticTagComponent from '../StaticTagComponent/StaticTagComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import VenueSocialsButtonComponent from '../VenueSocialsButtonComponent/VenueSocialsButtonComponent';
import { formatDate, formatTime } from '../../../helpers';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import HeartIcon from './HeartIcon';
import { postLike, deleteLike } from '../../../eventio-api';

const imagePath = '../../../assets/';

const SingleEventPage = ({ route }) => {
  const navigation = useNavigation();
  const [eventDetails, setEventDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [didChange, setDidChange] = useState(false);
  const event = eventDetails.event;

  useEffect(() => {
    console.log('mounted');
    setEventDetails(route.params);
    setLoading(false);
  }, []);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('MainPage', { didChange });
      return true; // Return true to prevent default behavior (exit the app)
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => backHandler.remove(); // Remove the event listener on component unmount
  }, [didChange]);

  /* go back on swipe down */
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      // Enable the pan responder only if the user is swiping down
      return gestureState.dy > 0;
    },
    onPanResponderRelease: (evt, gestureState) => {
      // If the swipe down gesture is completed, navigate back
      if (gestureState.dy > 50) {
        navigation.navigate('MainPage', { didChange });
      }
    },
  });

  const handleLikeButton = () => {
    const updatedEvent = { ...event, display_like: !event.display_like };
    setEventDetails({ ...eventDetails, event: updatedEvent });
    setDidChange(true);

    if (!event.display_like) {
      postLike(event.id, 0).catch((error) => console.log(error));
      console.log('liked event id:', event.id);
    } else {
      deleteLike(event.id, 0).catch((error) => console.log(error));
      console.log('unlinked event id:', event.id);
    }
  };

  /* loading */
  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <Animated.View
      style={[styles.containerStyle, { transform: [{ translateY: 0 }] }]}
      {...panResponder.panHandlers}
    >
      {console.log(event)}
      <View style={styles.backgroundImageContainerStyle}>
        <Image
          source={require(imagePath + 'placeholder.png')}
          style={styles.backgroundImageStyle}
        />
        <TouchableOpacity
          style={styles.heartButton}
          onPress={() => handleLikeButton()}
        >
          <HeartIcon iconName={event.display_like ? 'heart' : 'heart-o'} />
        </TouchableOpacity>
      </View>
      <View style={styles.eventInformationContainerStyle}>
        <Text style={styles.headerStyle}>{event.name}</Text>
        <View style={styles.venueContainerStyle}>
          <Image
            style={styles.venueImageStyle}
            source={require(imagePath + 'placeholder.png')}
          />
          <Text style={styles.venueNameStyle}>Mondaco</Text>
        </View>
        <View style={styles.tagsContainerStyle}>
          <StaticTagComponent />
        </View>
        <View style={styles.informationContainerStyle}>
          <View style={styles.informationStyle}>
            <Icon name='map-marker' style={styles.informationIconStyle} />
            <Text style={styles.informationTextStyle}>{event.address}</Text>
          </View>
          <View style={styles.informationStyle}>
            <Icon name='clock-o' style={styles.informationIconStyle} />
            <Text>
              {formatDate(new Date(event.start_date))} u{' '}
              {formatTime(new Date(event.start_date))}
            </Text>
          </View>
          <View style={styles.informationStyle}>
            <Icon name='credit-card' style={styles.informationIconStyle} />
            <Text>15 BAM</Text>
          </View>
        </View>
        <View style={styles.detailsContainerStyle}>
          <Text style={styles.detailsHeaderStyle}>Details</Text>
          <ScrollView style={styles.detailsScrollStyle}>
            <Text style={styles.detailsStyle}>{event.description}</Text>
          </ScrollView>
        </View>
        <View style={styles.socialsContainerStyle}>
          <VenueSocialsButtonComponent socialIconName={'facebook'} />
          <VenueSocialsButtonComponent socialIconName={'instagram'} />
          <VenueSocialsButtonComponent socialIconName={'google maps'} />
        </View>
      </View>
    </Animated.View>
  );
};

export default SingleEventPage;

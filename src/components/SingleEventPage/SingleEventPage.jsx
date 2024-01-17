import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  PanResponder,
  Animated,
} from 'react-native';
import styles from './SingleEventPageStyle';
import StaticTagComponent from '../StaticTagComponent/StaticTagComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import VenueSocialsButtonComponent from '../VenueSocialsButtonComponent/VenueSocialsButtonComponent';
import { formatDate, formatTime } from '../../../helpers';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const imagePath = '../../../assets/';

const SingleEventPage = ({ route }) => {
  const navigation = useNavigation();
  const [eventDetails, setEventDetails] = useState(route.params);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const event = eventDetails.event;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      // Enable the pan responder only if the user is swiping down
      return gestureState.dy > 0 && gestureState.dy > Math.abs(gestureState.dx);
    },
    onPanResponderRelease: (evt, gestureState) => {
      // If the swipe down gesture is completed, navigate back
      if (gestureState.dy > 50) {
        navigation.goBack();
      }
    },
  });

  /* if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Error loading</Text>
        {console.log(event)}
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error fetching event details</Text>
      </View>
    ); 
  }*/

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
          <VenueSocialsButtonComponent />
          <VenueSocialsButtonComponent />
          <VenueSocialsButtonComponent />
          <VenueSocialsButtonComponent />
        </View>
      </View>
    </Animated.View>
  );
};

export default SingleEventPage;

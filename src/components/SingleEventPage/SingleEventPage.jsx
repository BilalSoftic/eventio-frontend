import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import StaticTagComponent from '../StaticTagComponent/StaticTagComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import VenueSocialsButtonComponent from '../VenueSocialsButtonComponent/VenueSocialsButtonComponent';
import { formatDate, formatTime } from '../../../helpers';
import { useEffect, useState } from 'react';

const imagePath = '../../../assets/';

const SingleEventPage = ({ route }) => {
  const [eventDetails, setEventDetails] = useState(route.params);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const event = eventDetails.event;

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
    <View style={styles.containerStyle}>
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
              {formatTime(new Date(event.start_date))} -
              {formatTime(new Date(event.end_date))}
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
    </View>
  );
};
const styles = StyleSheet.create({
  loadingContainer: { flex: 1 },
  errorContainer: { flex: 1 },
  containerStyle: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'column',
  },
  backgroundImageContainerStyle: {
    width: '100%',
    height: '45%',
  },
  backgroundImageStyle: {
    width: '100%',
    height: '100%',
  },
  eventInformationContainerStyle: {
    height: '60%',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  headerStyle: {
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  venueContainerStyle: {
    marginBottom: 15,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  venueImageStyle: { height: 40, width: 40, borderRadius: 20 },
  venueNameStyle: { fontSize: 20, fontWeight: '500' },

  tagsContainerStyle: { marginBottom: 10 },
  informationContainerStyle: {
    paddingVertical: 10,
    gap: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(80, 80, 80, 0.3)',
  },
  informationStyle: {
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  informationIconStyle: { fontSize: 20, color: '#898989' },
  informationTextStyle: { fontSize: 16 },
  detailsContainerStyle: {
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(80, 80, 80, 0.3)',
  },
  detailsHeaderStyle: { fontSize: 20, marginBottom: 10, fontWeight: '500' },
  detailsScrollStyle: { height: '20%' },
  detailsStyle: { fontSize: 16, lineHeight: 22, opacity: 0.5 },
  socialsContainerStyle: {
    gap: 5,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
export default SingleEventPage;

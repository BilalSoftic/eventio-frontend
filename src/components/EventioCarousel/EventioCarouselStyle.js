import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const EventioCarouselStyle = StyleSheet.create({
  child: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width,
    resizeMode: 'contain',
  },
});

export default EventioCarouselStyle;

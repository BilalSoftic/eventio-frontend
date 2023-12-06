import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const MainPageStyle = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  headerStyle: {
    height: 200,
    margin: -50,
    backgroundColor: '#004972',
    position: 'relative',
  },
  headingStyle: {
    fontSize: 34,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    position: 'absolute',
    top: 90,
  },
  dotsStyle: {
    position: 'absolute',
    top: 130,
    right: 40,
  },
  contentContainerStyle: {
    flex: 1,
    paddingBottom: 30,
    alignItems: 'center',
  },
  carouselContainerStyle: {
    borderRadius: 20,
    marginBottom: 30,
    overflow: 'hidden',
    height: 200,
    width: '96%',
  },
});

export default MainPageStyle;

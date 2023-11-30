import { StyleSheet } from 'react-native';
const MainPageStyle = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  headerStyle: {
    height: 200,
    marginBottom: '-20%',
    backgroundColor: '#004972',
    position: 'relative',
  },
  headingStyle: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '30%',
    left: '10%',
  },
  dotsStyle: {
    position: 'absolute',
    top: '50%',
    right: '3%',
  },
  contentContainerStyle: {
    flex: 1,
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  carouselContainerStyle: {
    borderRadius: 20,
    overflow: 'hidden',
    height: '30%',
    width: '100%',
  },
});

export default MainPageStyle;

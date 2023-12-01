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
    paddingBottom: 30,
    alignItems: 'center',
  },
  carouselContainerStyle: {
    borderRadius: 20,
    marginBottom: 30,
    overflow: 'hidden',
    height: '30%',
    width: '85%',
  },
  horizontalScrollContainerStyle: {
    height: '40%',
    borderWidth: 2,
    marginLeft: '7.5%',
  },
  horizontalScrollStyle: {},
  HorizontalScrollHeaderStyle: {
    paddingVertical: 5,
  },
  horizontalScrollHeading: {
    fontSize: 20,
  },
});

export default MainPageStyle;

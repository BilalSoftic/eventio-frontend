import { StyleSheet } from 'react-native';
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

  carouselContainerStyle: {
    borderRadius: 20,
    marginBottom: 30,
    height: 200,
    overflow: 'hidden',
    width: '96%',
    alignSelf: 'center',
  },
  horizontalScrollsContainerStyle: {
    gap: 5,
  },
  allEventsContainerStyle: { flex: 1, marginTop: 100 },
  containerI: {
    marginBottom: 5,
    height: 300,
  },
  HorizontalScrollHeaderStyle: {
    paddingLeft: '5%',
  },
  horizontalScrollHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default MainPageStyle;

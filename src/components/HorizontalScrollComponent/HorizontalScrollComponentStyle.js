import { StyleSheet } from 'react-native';

const HorizontalScrollComponentStyle = StyleSheet.create({
  horizontalScrollContainerStyle: {
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

  containerStyle: {
    width: 160,
    marginHorizontal: 10,
    marginVertical: 10,
    marginBottom: 10,
    borderRadius: 15,
    position: 'relative',
    flexDirection: 'column',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  backgroundImageContainerStyle: {
    height: '80%',
    width: '100%',
    position: 'relative',
  },
  backgroundImageStyle: {
    width: '100%',
    height: '100%',
  },
  heartButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  heartIcon: {
    color: 'white',
    fontSize: 20,
  },

  informationContainerStyle: {
    width: '100%',
    padding: 10,
    gap: 5,
    borderRadius: 15,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  dateStyle: { fontSize: 11, color: '#0C6A9F' },
  titleStyle: { fontSize: 15, fontWeight: 'bold' },

  locationStyle: { fontSize: 11, color: '#707070' },
});

export default HorizontalScrollComponentStyle;

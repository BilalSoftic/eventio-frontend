import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
const SingleEventComponentStyle = StyleSheet.create({
  containerStyle: {
    flexDirection: 'column',
    width: width / 2.5,
    borderRadius: 20,
    borderWidth: 2,
    marginRight: 10,
    overflow: 'hidden',
  },
  backgroundImageContainerStyle: {
    height: '50%',
    width: '100%',
    marginBottom: -20,
  },
  backgroundImageStyle: {
    width: '100%',
    height: '100%',
  },

  informationContainerStyle: {
    height: '100%',
    padding: '5%',
    borderRadius: 20,
    backgroundColor: 'white',
  },
});
export default SingleEventComponentStyle;

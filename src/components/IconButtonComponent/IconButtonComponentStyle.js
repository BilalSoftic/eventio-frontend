import { StyleSheet } from 'react-native';
const IconButtonComponentStyle = StyleSheet.create({
  iconContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 7,
  },
  imageContainer: {
    flex: 1,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default IconButtonComponentStyle;

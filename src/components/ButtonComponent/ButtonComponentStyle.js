import { StyleSheet } from 'react-native';

const ButtonComponentStyle = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 20,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#004972',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },

  buttonTextStyle: {
    margin: 0,
    padding: 0,
    fontSize: 17,
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
});

export default ButtonComponentStyle;

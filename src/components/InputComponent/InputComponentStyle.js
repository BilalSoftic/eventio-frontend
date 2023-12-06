import { StyleSheet } from 'react-native';
const InputComponentStyle = StyleSheet.create({
  inputContainerStyle: {
    padding: 12,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#D9D9D9',
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
  },
  iconContainerStyle: {
    width: 22,
    height: 22,
    marginLeft: 15,
    borderRadius: 3,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 49, 72, 0.1)',
  },
  iconStyle: {
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#0C6A9F',
  },
});

export default InputComponentStyle;

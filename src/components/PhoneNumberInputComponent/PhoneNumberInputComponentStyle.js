import { StyleSheet } from 'react-native';
const PhoneNumberInputComponentStyle = StyleSheet.create({
  container: {
    padding: 14,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  phoneInput: { width: '80%' },

  icon: {
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#0C6A9F',
  },
  iconContainer: {
    width: 22,
    height: 22,
    borderRadius: 3,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 49, 72, 0.1)',
  },
  countryButton: {
    marginBottom: 20,
  },
  countryPickerButton: {
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  countryPickerCloseButton: {
    width: 20,
    height: 20,
  },
  submitButton: {
    width: '100%',
  },
});

export default PhoneNumberInputComponentStyle;

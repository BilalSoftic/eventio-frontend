import { StyleSheet } from 'react-native';
const SecondSignUpPageStyle = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  backgroundImageStyle: {
    minWidth: '110%',
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
  },
  interactiveContainerStyle: {
    width: '100%',
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 25,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
  },
  mainHeaderTextStyle: {
    fontSize: 30,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  pageNumberingContainer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'flex-start',
  },
  inputsContainerStyle: {
    flex: 1,
    marginBottom: 10,
    gap: 5,
  },
  buttonContainerStyle: {
    marginBottom: 15,
  },
  goBackStyle: {
    marginBottom: 15,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'capitalize',
    color: 'rgb(0, 49, 72)',
  },
  /* DatePicker */
  datePickerContainer: {},
  buttonStyle: {
    padding: 12,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#D9D9D9',
  },
  buttonTextStyle: {
    flex: 1,
    fontSize: 16,
    textTransform: 'capitalize',
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

export default SecondSignUpPageStyle;

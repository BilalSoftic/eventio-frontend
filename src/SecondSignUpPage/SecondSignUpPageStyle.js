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
});

export default SecondSignUpPageStyle;

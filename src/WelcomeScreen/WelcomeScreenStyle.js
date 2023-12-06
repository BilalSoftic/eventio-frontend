import { StyleSheet } from 'react-native';
const WelcomeScreenStyle = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#004972',
  },
  backgroundImageStyle: {
    flex: 2,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotsStartStyle: {
    position: 'absolute',
    top: '10%',
    right: '3%',
  },
  centerImgStyle: {
    position: 'absolute',
    top: '23%',
    right: '5%',
  },
  dotsEndStyle: {
    position: 'absolute',
    bottom: '-1%',
    left: '1%',
  },

  interactiveContainerStyle: {
    flex: 1.3,
    padding: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-around',
  },
  mainHeaderTextStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  secondaryHeaderTextStyle: {
    marginBottom: 20,
    fontSize: 20,
    opacity: 0.5,
    alignSelf: 'center',
  },
  flagSelectorContainerStyle: {
    height: '25%',
    marginBottom: 30,
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagButtonStyle: {
    width: '40%',
    height: '90%',
  },
  selectedFlagStyle: {
    opacity: 1,
  },
  unselectedFlagStyle: {
    opacity: 0.5,
  },
  flagImageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default WelcomeScreenStyle;

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
    top: 50,
    right: 0,
  },
  centerImgStyle: {
    position: 'absolute',
    top: '23%',
    right: '5%',
  },
  dotsEndStyle: {
    position: 'absolute',
    bottom: -10,
    left: 0,
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
  flagSelectorStyle: {
    marginBottom: 30,
    gap: 35,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  flagButtonStyle: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  selectedFlagStyle: {
    opacity: 1,
  },
  unselectedFlagStyle: {
    opacity: 0.5,
  },
});

export default WelcomeScreenStyle;

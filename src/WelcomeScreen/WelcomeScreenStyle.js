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
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  secondaryHeaderTextStyle: {
    marginBottom: 20,
    fontSize: 16,
    opacity: 0.5,
    alignSelf: 'center',
  },
  flagSelectorStyle: {
    marginBottom: 20,
    gap: 35,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  selectedFlagStyle: {
    opacity: 1,
  },
  unselectedFlagStyle: {
    opacity: 0.5,
  },

  dotsImageStyle: {
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default WelcomeScreenStyle;

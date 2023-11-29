import { StyleSheet } from 'react-native';
const InfoPageStyle = StyleSheet.create({
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
    left: '3%',
  },
  tagsContainer: {
    position: 'absolute',
    top: '25%',
  },

  arrow: {
    position: 'absolute',
    bottom: '-8%',
    right: '15%',
  },
  dotsEndStyle: {
    position: 'absolute',
    bottom: '3%',
    right: '3%',
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
  mainText: {
    fontSize: 16,
    opacity: 0.5,
    lineHeight: 25,
    justifyContent: 'center',
    textAlign: 'center',
  },
  dotsContainer: {
    width: '100%',
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 10,
    alignSelf: 'center',
  },
});

export default InfoPageStyle;

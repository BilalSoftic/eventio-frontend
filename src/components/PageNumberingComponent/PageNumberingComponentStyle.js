import { StyleSheet } from 'react-native';
const PageNumberingComponentStyle = StyleSheet.create({
  containerStyle: {
    width: 250,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  firstCircleContainerStyle: {
    marginRight: -10,
    flexDirection: 'column',
    alignItems: 'center',
  },

  circleHeaderStyle: {
    fontSize: 14,
    marginTop: 5,
    opacity: 0.4,
    textTransform: 'capitalize',
  },

  secondCircleContainerStyle: {
    marginLeft: '-19%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  circleStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  opacityCircleStyle: {
    backgroundColor: 'rgba(0, 49, 72, 0.2)',
  },
  blueCircleStyle: {
    backgroundColor: '#004972',
  },
  whiteContentStyle: {
    fontSize: 20,
    color: 'white',
  },
  blueContentStyle: {
    fontSize: 20,
    color: '#004972',
  },

  lineStyle: {
    width: 140,
    height: 2,
    marginBottom: 25,
  },
  opacityLineStyle: {
    backgroundColor: 'rgba(0, 49, 72, 0.2)',
  },
  blueLineStyle: {
    backgroundColor: '#004972',
  },
});

export default PageNumberingComponentStyle;

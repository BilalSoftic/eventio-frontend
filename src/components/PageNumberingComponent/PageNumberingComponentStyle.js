import { StyleSheet } from 'react-native';
const PageNumberingComponentStyle = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    marginLeft: '-18.9%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  circleStyle: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
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
    fontSize: 15,
    color: 'white',
  },
  blueContentStyle: {
    fontSize: 15,
    color: '#004972',
  },

  lineStyle: {
    width: 100,
    height: 2,
  },
  opacityLineStyle: {
    backgroundColor: 'rgba(0, 49, 72, 0.2)',
  },
  blueLineStyle: {
    backgroundColor: '#004972',
  },
});

export default PageNumberingComponentStyle;

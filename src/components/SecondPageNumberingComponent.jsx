import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SecondPageNumberingComponent = (props) => {
  const {
    firstCircleContent,
    secondCircleContent,
    firstCircleHeader,
    secondCircleHeader,
  } = props;
  return (
    <View style={styles.numbersWrapper}>
      {/* First number */}
      <View style={styles.firstNumberContainer}>
        <View style={[styles.circle, styles.blueCircle]}>
          <Icon name={firstCircleContent} style={[styles.whiteNumber]} />
        </View>
        <Text style={styles.numberHeader}>{firstCircleHeader}</Text>
      </View>
      <View style={styles.line} />
      {/* Second number */}
      <View style={styles.secondNumberContainer}>
        <View style={[styles.circle, styles.blueCircle]}>
          <Text style={[styles.whiteNumber]}>{secondCircleContent}</Text>
        </View>
        <Text style={styles.numberHeader}>{secondCircleHeader}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  numbersWrapper: {
    width: 250,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  firstNumberContainer: {
    marginRight: -10,
    flexDirection: 'column',
    alignItems: 'center',
  },

  numberHeader: {
    fontSize: 14,
    marginTop: 5,
    opacity: 0.4,
    textTransform: 'capitalize',
  },

  secondNumberContainer: {
    marginLeft: '-19%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  opacityCircle: {
    backgroundColor: 'rgba(0, 49, 72, 0.2)',
  },
  blueCircle: {
    backgroundColor: '#004972',
  },
  whiteNumber: {
    fontSize: 20,
    color: 'white',
  },
  darkBlueNumber: {
    fontSize: 20,
    color: '#004972',
  },

  line: {
    width: 140,
    height: 2,
    marginBottom: 25,
    backgroundColor: '#004972',
  },
});

export default SecondPageNumberingComponent;

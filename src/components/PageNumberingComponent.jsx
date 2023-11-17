import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PageNumberingComponent = (props) => {
  const { signUpPageNumber } = props;
  const content =
    signUpPageNumber === 'FirstSignUpPage' ? (
      <Text style={styles.whiteNumber}>1</Text>
    ) : signUpPageNumber === 'SecondSignUpPage' ? (
      <Icon name="check" style={styles.whiteNumber} />
    ) : null;
  const circleBackground =
    signUpPageNumber === 'FirstSignUpPage'
      ? { ...styles.opacityCircle }
      : signUpPageNumber === 'SecondSignUpPage'
      ? { ...styles.blueCircle }
      : null;
  const numberColor =
    signUpPageNumber === 'FirstSignUpPage'
      ? { ...styles.darkBlueNumber }
      : signUpPageNumber === 'SecondSignUpPage'
      ? { ...styles.whiteNumber }
      : null;
  const lineColor =
    signUpPageNumber === 'FirstSignUpPage'
      ? { ...styles.opacityLine }
      : signUpPageNumber === 'SecondSignUpPage'
      ? { ...styles.blueLine }
      : null;

  return (
    <View style={styles.numbersWrapper}>
      {/* First number */}
      <View style={styles.firstNumberContainer}>
        <View style={[styles.circle, styles.blueCircle]}>{content}</View>
        <Text style={styles.numberHeader}>General</Text>
      </View>
      <View style={[styles.line, lineColor]} />
      {/* Second number */}
      <View style={styles.secondNumberContainer}>
        <View style={[styles.circle, circleBackground]}>
          <Text style={numberColor}>2</Text>
        </View>
        <Text style={styles.numberHeader}>Personal Information</Text>
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
  },
  opacityLine: {
    backgroundColor: 'rgba(0, 49, 72, 0.2)',
  },
  blueLine: {
    backgroundColor: '#004972',
  },
});

export default PageNumberingComponent;

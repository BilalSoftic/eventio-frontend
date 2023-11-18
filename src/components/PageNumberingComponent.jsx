import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PageNumberingComponent = (props) => {
  const { signUpPageNumber } = props;
  const content =
    signUpPageNumber === 'FirstSignUpPage' ? (
      <Text style={styles.whiteContentStyle}>1</Text>
    ) : signUpPageNumber === 'SecondSignUpPage' ? (
      <Icon name="check" style={styles.whiteContentStyle} />
    ) : null;
  const circleBackgroundStyle =
    signUpPageNumber === 'FirstSignUpPage'
      ? { ...styles.opacityCircleStyle }
      : signUpPageNumber === 'SecondSignUpPage'
      ? { ...styles.blueCircleStyle }
      : null;
  const contentColorStyle =
    signUpPageNumber === 'FirstSignUpPage'
      ? { ...styles.blueContentStyle }
      : signUpPageNumber === 'SecondSignUpPage'
      ? { ...styles.whiteContentStyle }
      : null;
  const lineColorStyle =
    signUpPageNumber === 'FirstSignUpPage'
      ? { ...styles.opacityLineStyle }
      : signUpPageNumber === 'SecondSignUpPage'
      ? { ...styles.blueLineStyle }
      : null;

  return (
    <View style={styles.containerStyle}>
      {/* First number */}
      <View style={styles.firstCircleContainerStyle}>
        <View style={[styles.circleStyle, styles.blueCircleStyle]}>
          {content}
        </View>
        <Text style={styles.circleHeaderStyle}>General</Text>
      </View>
      <View style={[styles.lineStyle, lineColorStyle]} />
      {/* Second number */}
      <View style={styles.secondCircleContainerStyle}>
        <View style={[styles.circleStyle, circleBackgroundStyle]}>
          <Text style={contentColorStyle}>2</Text>
        </View>
        <Text style={styles.circleHeaderStyle}>Personal Information</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default PageNumberingComponent;

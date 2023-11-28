import React from 'react';
import { View, Text } from 'react-native';
import styles from './PageNumberingComponentStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const PageNumberingComponent = (props) => {
  const { signUpPageNumber } = props;
  const content =
    signUpPageNumber === 'FirstSignUpPage' ? (
      <Text style={styles.whiteContentStyle}>1</Text>
    ) : signUpPageNumber === 'SecondSignUpPage' ? (
      <Icon name='check' style={styles.whiteContentStyle} />
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
      <View style={[styles.circleStyle, styles.blueCircleStyle]}>
        {content}
      </View>

      <View style={[styles.lineStyle, lineColorStyle]} />

      <View style={[styles.circleStyle, circleBackgroundStyle]}>
        <Text style={contentColorStyle}>2</Text>
      </View>
    </View>
  );
};

export default PageNumberingComponent;

import { View } from 'react-native';
import React, { forwardRef } from 'react';
import styles from './PhoneNumberInputComponentStyle';
import PhoneInput from 'react-native-phone-input';
import Icon from 'react-native-vector-icons/FontAwesome';

const PhoneNumberInputComponent = forwardRef((props, ref) => {
  const { value, onChangePhoneNumber, borderColor, onPressNext } = props;

  const phoneNumberStyle = {
    ...styles.container,
    borderColor: borderColor,
  };
  return (
    <View style={phoneNumberStyle}>
      <PhoneInput
        initialCountry="ba"
        textStyle={{ fontSize: 16 }}
        value={value}
        onChangePhoneNumber={onChangePhoneNumber}
        flagStyle={{ height: 22, borderRadius: 5 }}
        style={styles.phoneInput}
        ref={ref}
        textProps={{
          returnKeyType: 'next',
        }}
      />
      <View style={styles.iconContainer}>
        <Icon name="phone" style={styles.icon} />
      </View>
    </View>
  );
});

export default PhoneNumberInputComponent;

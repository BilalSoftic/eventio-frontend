import React, { forwardRef, useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-input';
/* import CountryPicker from 'react-native-country-picker-modal'; */
import Icon from 'react-native-vector-icons/FontAwesome';

const PhoneNumberInputComponent = forwardRef(
  (Input = (props, ref) => {
    const { value, onChangePhoneNumber, borderColor, nextRef } = props;
    /* const [phoneNumber, setPhoneNumber] = useState(''); */
    const [countryCode, setCountryCode] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);
    /* const [countryPickerVisible, setCountryPickerVisible] = useState(false); */

    /* const onSelectCountry = (country) => {
      setCountryCode(country.cca2);
      setSelectedCountry(country);
      setCountryPickerVisible(false);
    }; */

    const onSubmit = () => {
      Alert.alert(
        'Form Submitted',
        `Phone Number: ${value} 
					`
      );
    };

    /*  const toggleCountryPicker = () => {
      setCountryPickerVisible(!countryPickerVisible);
    }; */

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
            returnKeyType: nextRef ? 'next' : 'done',
            onSubmitEditing: () => {
              nextRef ? nextRef.current.focus() : null;
            },
          }}
        />
        <View style={styles.iconContainer}>
          <Icon name="phone" style={styles.icon} />
        </View>
        {/*     <Button
        title={selectedCountry ? selectedCountry.name : 'Select Country'}
        onPress={toggleCountryPicker}
        style={styles.countryButton}
      />
      {countryPickerVisible && (
        <CountryPicker
          withFilter={true}
          withFlagButton={false}
          withCountryNameButton={false}
          onSelect={onSelectCountry}
          onClose={() => setCountryPickerVisible(false)}
          visible={countryPickerVisible}
          containerButtonStyle={styles.countryPickerButton}
          closeButtonImageStyle={styles.countryPickerCloseButton}
        />
      )}
      
      <Button title="Submit" onPress={onSubmit} style={styles.submitButton} /> */}
      </View>
    );
  })
);

const styles = StyleSheet.create({
  container: {
    padding: 14,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  phoneInput: { width: '80%' },

  icon: {
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#0C6A9F',
  },
  iconContainer: {
    width: 22,
    height: 22,
    borderRadius: 3,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 49, 72, 0.1)',
  },
  countryButton: {
    marginBottom: 20,
  },
  countryPickerButton: {
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  countryPickerCloseButton: {
    width: 20,
    height: 20,
  },
  submitButton: {
    width: '100%',
  },
});

export default PhoneNumberInputComponent;

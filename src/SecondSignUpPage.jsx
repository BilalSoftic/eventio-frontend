import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import PageNumberingComponent from './components/PageNumberingComponent';
import DatePickerComponent from './components/DatePickerComponent';
import SignUpInput from './components/SignUpInput';
import PhoneNumberInputComponent from './components/PhoneNumberInputComponent';
import ButtonComponent from './components/ButtonComponent';
import { useState, useRef } from 'react';

const SecondSignUpPage = ({ navigation }) => {
  /* State */
  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNameValid, setNameValid] = useState(false);
  const [isLastNameValid, setLastNameValid] = useState(false);
  const [isPhoneNumberValid, setPhoneNumberValid] = useState(false);
  /* Page navigation */
  const navigateToFirstSignUpPage = () => {
    navigation.navigate('FirstSignUpPage');
  };
  /* useRef */
  const nameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const datePickerComponentRef = useRef();

  /* Validation function */
  const validateName = (input) => {
    const namePattern = /^[A-Za-zčćŠšĐđŽžČčĆć\s]+$/;
    return namePattern.test(input);
  };

  const validateLastName = (input) => {
    const namePattern = /^[A-Za-zčćŠšĐđŽžČčĆć\s]+$/;
    return namePattern.test(input);
  };
  const validatePhoneNumber = (input) => {
    return input.length >= 3;
  };
  /* Handle change */
  const handleInputChange = (name, text) => {
    switch (name) {
      case 'name':
        setName(text);
        setNameValid(validateName(text));
        break;
      case 'lastName':
        setLastName(text);
        setLastNameValid(validateLastName(text));
        break;
      case 'phoneNumber':
        setPhoneNumber(text);
        setPhoneNumberValid(validatePhoneNumber(text));
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.containerStyle}>
      {/* BACKGROUND IMAGE */}
      <Image
        style={styles.backgroundImageStyle}
        source={require('../assets/img/SecondSignUpPageBackground.png')}
      ></Image>
      {/* INTERACTIVE BOX */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        style={styles.interactiveContainerStyle}
      >
        <Text style={styles.mainHeaderTextStyle}>Sign up</Text>
        {/* PAGE NUMBERING */}
        <View style={styles.pageNumberingContainer}>
          <PageNumberingComponent signUpPageNumber="SecondSignUpPage" />
        </View>
        {/* FORM */}
        <View style={styles.inputsContainerStyle}>
          <SignUpInput
            keyboardType="default"
            placeholder="Name"
            value={firstName}
            onChangeText={(text) => handleInputChange('name', text)}
            borderColor={isNameValid ? 'green' : '#D9D9D9'}
            iconName="user"
            ref={nameRef}
            nextRef={lastNameRef}
          ></SignUpInput>
          <SignUpInput
            keyboardType="default"
            placeholder="Last Name"
            value={lastName}
            onChangeText={(text) => handleInputChange('lastName', text)}
            borderColor={isLastNameValid ? 'green' : '#D9D9D9'}
            iconName="user"
            ref={lastNameRef}
            nextRef={phoneNumberRef}
          ></SignUpInput>
          <PhoneNumberInputComponent
            value={phoneNumber}
            onChangePhoneNumber={(text) =>
              handleInputChange('phoneNumber', text)
            }
            ref={phoneNumberRef}
            nextRef={datePickerComponentRef}
            borderColor={isPhoneNumberValid ? 'green' : '#D9D9D9'}
          />
          <DatePickerComponent ref={datePickerComponentRef} />
        </View>
        <View style={styles.buttonContainerStyle}>
          <ButtonComponent
            styleType="signUpPageButtonStyle"
            /* disabled={!isContinueButtonEnabled}
              onPress={navigateToSecondSignUpPage} */
            text="Continue"
          />
        </View>
        <Text style={styles.goBackStyle} onPress={navigateToFirstSignUpPage}>
          go back
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImageStyle: {
    minWidth: '150%',
    position: 'absolute',
    top: 0,
  },
  interactiveContainerStyle: {
    width: '100%',
    paddingTop: 25,
    paddingBottom: 15,
    paddingHorizontal: 25,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
  },
  mainHeaderTextStyle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  pageNumberingContainer: {
    marginBottom: 10,
  },
  inputsContainerStyle: {
    flex: 1,
    marginBottom: 10,
    gap: 5,
  },
  buttonContainerStyle: {
    marginBottom: 15,
  },
  goBackStyle: {
    marginBottom: 15,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'capitalize',
    color: 'rgb(0, 49, 72)',
  },
});
export default SecondSignUpPage;

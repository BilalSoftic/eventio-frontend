import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState, useRef, useEffect } from 'react';
import styles from './SecondSignUpPageStyle';
import PageNumberingComponent from '../components/PageNumberingComponent/PageNumberingComponent';
import DatePickerComponent from '../components/DatePickerComponent/DatePickerComponent';
import InputComponent from '../components/InputComponent/InputComponent';
import PhoneNumberInputComponent from '../components/PhoneNumberInputComponent/PhoneNumberInputComponent';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';

const imgPath = '../../assets/img/';

const SecondSignUpPage = ({ navigation }) => {
  /* State */
  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNameValid, setNameValid] = useState(false);
  const [isLastNameValid, setLastNameValid] = useState(false);
  const [isPhoneNumberValid, setPhoneNumberValid] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  /* Page navigation */
  const navigateToFirstSignUpPage = () => {
    navigation.navigate('FirstSignUpPage');
    const navigateFirstInfoPage = () => {
      navigation.navigate('FirstInfoPage');
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
          source={require(imgPath + 'SecondSignUpPageBackground.png')}
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
            <InputComponent
              keyboardType="default"
              placeholder="Name"
              value={firstName}
              onChangeText={(text) => handleInputChange('name', text)}
              borderColor={isNameValid ? 'green' : '#D9D9D9'}
              iconName="user"
              ref={nameRef}
              nextRef={lastNameRef}
            ></InputComponent>
            <InputComponent
              keyboardType="default"
              placeholder="Last Name"
              value={lastName}
              onChangeText={(text) => handleInputChange('lastName', text)}
              borderColor={isLastNameValid ? 'green' : '#D9D9D9'}
              iconName="user"
              ref={lastNameRef}
              nextRef={phoneNumberRef}
            ></InputComponent>
            <PhoneNumberInputComponent
              value={phoneNumber}
              onChangePhoneNumber={(text) =>
                handleInputChange('phoneNumber', text)
              }
              ref={phoneNumberRef}
              borderColor={isPhoneNumberValid ? 'green' : '#D9D9D9'}
              onSubmitEditing={() => setIsDatePickerVisible(true)}
            />
            <DatePickerComponent
              isDatePickerVisible={isDatePickerVisible}
              setIsDatePickerVisible={setIsDatePickerVisible}
            />
          </View>
          <View style={styles.buttonContainerStyle}>
            <ButtonComponent
              styleType="signUpPageButtonStyle"
              disabled={!isContinueButtonEnabled}
              onPress={navigateFirstInfoPage}
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
};

export default SecondSignUpPage;

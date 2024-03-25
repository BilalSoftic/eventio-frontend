import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useState, useRef } from 'react';
import styles from './SecondSignUpPageStyle';
import PageNumberingComponent from '../components/PageNumberingComponent/PageNumberingComponent';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import InputComponent from '../components/InputComponent/InputComponent';
import PhoneNumberInputComponent from '../components/PhoneNumberInputComponent/PhoneNumberInputComponent';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const imgPath = '../../assets/img/';

const SecondSignUpPage = () => {
  const navigation = useNavigation();
  /* State */
  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNameValid, setNameValid] = useState(false);
  const [isLastNameValid, setLastNameValid] = useState(false);
  const [isPhoneNumberValid, setPhoneNumberValid] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  /* useRef */
  const nameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();

  /* Page navigation */
  const goBack = () => {
    navigation.navigate('FirstSignUpPage');
  };

  const onSignUpSuccess = () => {
    navigation.navigate('WelcomePage');
  };

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

  /* DatePicker */
  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const buttonText = selectedDate
    ? selectedDate.toLocaleDateString('bs-BA', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : 'date of birth';
  const buttonTextStyle = {
    ...styles.buttonTextStyle,
    color: selectedDate ? 'black' : 'rgba(70, 70, 70, 0.5)',
  };
  const buttonStyle = {
    ...styles.buttonStyle,
    borderColor: selectedDate ? 'green' : '#D9D9D9',
  };
  // Maximum date (today minus 15 years)
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 15);

  /* Enable Button */
  const isContinueButtonEnabled =
    isNameValid && isLastNameValid && isPhoneNumberValid && selectedDate;

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
        <View style={styles.pageNumberingContainerStyle}>
          <PageNumberingComponent signUpPageNumber='SecondSignUpPage' />
        </View>
        {/* FORM */}
        <View style={styles.inputsContainerStyle}>
          <InputComponent
            keyboardType='default'
            placeholder='Name'
            value={firstName}
            onChangeText={(text) => handleInputChange('name', text)}
            borderColor={isNameValid ? 'green' : '#D9D9D9'}
            iconName='user'
            ref={nameRef}
            nextRef={lastNameRef}
          ></InputComponent>
          <InputComponent
            keyboardType='default'
            placeholder='Last Name'
            value={lastName}
            onChangeText={(text) => handleInputChange('lastName', text)}
            borderColor={isLastNameValid ? 'green' : '#D9D9D9'}
            iconName='user'
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
          {/* DatePicker */}
          <View style={styles.datePickerContainerStyle}>
            <TouchableOpacity style={buttonStyle} onPress={showDatePicker}>
              <Text style={buttonTextStyle}>{buttonText}</Text>
              <View style={styles.iconContainerStyle}>
                <Icon name='calendar' style={styles.iconStyle} />
              </View>
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode='date'
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              maximumDate={maxDate}
              minimumDate={new Date(1950, 0, 1)}
            />
          </View>
        </View>
        <View style={styles.buttonContainerStyle}>
          <ButtonComponent
            styleType='signUpPageButtonStyle'
            disabled={!isContinueButtonEnabled}
            onPress={onSignUpSuccess}
            text='Continue'
          />
        </View>
        <Text style={styles.goBackStyle} onPress={goBack}>
          go back
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SecondSignUpPage;

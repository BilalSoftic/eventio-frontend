import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useState, useRef, useEffect } from 'react';
import styles from './SecondSignUpPageStyle';
import PageNumberingComponent from '../components/PageNumberingComponent/PageNumberingComponent';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import InputComponent from '../components/InputComponent/InputComponent';
import PhoneNumberInputComponent from '../components/PhoneNumberInputComponent/PhoneNumberInputComponent';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { signUp } from '../../eventio-api';
import MessageModalComponent from '../components/MessageModalComponent/MessageModalComponent';
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';
const imgPath = '../../assets/img/';

const SecondSignUpPage = ({ route }) => {
  const navigation = useNavigation();
  /*  */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  /*  */
  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isNameValid, setNameValid] = useState(false);
  const [isLastNameValid, setLastNameValid] = useState(false);
  const [isPhoneNumberValid, setPhoneNumberValid] = useState(false);
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMessage, setIsMessage] = useState('');
  const [loading, setLoading] = useState(true);

  /* useRef */
  const nameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();

  /* update email and pass */
  useEffect(() => {
    setEmail(route.params.email);
    setPassword(route.params.password);
    setConfirmPassword(route.params.confirmPassword);
    setLoading(false);
  }, []);

  /* Page navigation */
  const goBack = () => {
    navigation.navigate('FirstSignUpPage');
  };

  const handleSignUp = () => {
    setLoading(true);
    signUp(
      email,
      firstName,
      lastName,
      password,
      confirmPassword,
      phoneNumber,
      selectedDate
    )
      .then((res) => {
        const responseMessage = res.data.message;
        const responseStatus = res.status;
        if (responseStatus !== 200) {
          setLoading(false);
          setIsError(true);
          setIsMessage(responseMessage);
        } else {
          setLoading(false);
          setIsSuccess(true);
          setIsMessage(responseMessage);
          navigation.navigate('WelcomePage');
        }
      })
      .catch((error) => {
        setLoading(false);
        setIsError(true);
        setIsMessage(error);
      });
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
    const formattedDate = date.toLocaleDateString('bs-BA', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
    setSelectedDate(formattedDate);
    hideDatePicker();
  };

  const buttonText = selectedDate ? selectedDate : 'date of birth';

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
  /* Error */
  const handleCloseModal = () => {
    setIsError(false);
    setIsSuccess(false);
  };

  /* loading */
  if (loading) {
    return <LoadingComponent />;
  }

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
        {/* Error and Success message rendering */}
        <MessageModalComponent
          message={isMessage}
          isVisible={isError || isSuccess}
          closeModal={handleCloseModal}
        />

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
            onPress={handleSignUp}
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

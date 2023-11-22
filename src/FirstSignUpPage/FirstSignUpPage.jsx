import {
  View,
  Text,
  Image,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState, useRef } from 'react';
import styles from './FirstSignUpPageStyle';
import PageNumberingComponent from '../components/PageNumberingComponent/PageNumberingComponent';
import SignUpInput from '../components/InputComponent/InputComponent';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import DividerComponent from '../components/DividerComponent/DividerComponent';
import IconButton from '../components/IconButtonComponent/IconButtonComponent';

const imgPath = '../../assets/img/';

const FirstSignUpPage = ({ navigation }) => {
  /* State */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setConfirmPasswordValid] = useState(false);

  /* Page navigation */
  const navigateToSecondSignUpPage = () => {
    navigation.navigate('SecondSignUpPage');
  };
  const navigateToSignInPage = () => {
    navigation.navigate('SignInPage');
  };

  /* useRef */
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  /* Validation function */
  const validateEmail = (input) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(input);
  };
  const validatePassword = (input) => {
    return input.length >= 6;
  };
  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  /* Handle change */
  const handleInputChange = (name, text) => {
    switch (name) {
      case 'email':
        setEmail(text);
        setEmailValid(validateEmail(text));
        break;
      case 'password':
        setPassword(text);
        setPasswordValid(validatePassword(text));
        break;
      case 'confirmPassword':
        setConfirmPassword(text);
        setConfirmPasswordValid(validateConfirmPassword(password, text));
        break;
      default:
        break;
    }
  };

  /* Enable Button */
  const isContinueButtonEnabled =
    isEmailValid && isPasswordValid && isConfirmPasswordValid;

  /* Handle Sign in link */
  const handleSignInPress = () => {
    const signInUrl = 'https://google.com';
    Linking.openURL(signInUrl);
  };
  return (
    <View style={styles.containerStyle}>
      {/* BACKGROUND IMAGE */}
      <Image
        style={styles.backgroundImageStyle}
        source={require(imgPath + 'FirstSignUpPageBackground.png')}
      ></Image>
      {/* INTERACTIVE BOX */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        style={styles.interactiveContainerStyle}
      >
        <Text style={styles.mainHeaderTextStyle}>Sign up</Text>
        {/* PAGE NUMBERING */}
        <View style={styles.pageNumberingContainer}>
          <PageNumberingComponent signUpPageNumber="FirstSignUpPage" />
        </View>
        {/* FORM */}
        <View style={styles.inputsContainerStyle}>
          <SignUpInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="E-mail"
            value={email}
            onChangeText={(text) => handleInputChange('email', text)}
            borderColor={isEmailValid ? 'green' : '#D9D9D9'}
            iconName="envelope"
            nextRef={passwordRef}
          ></SignUpInput>
          <SignUpInput
            keyboardType="default"
            placeholder="Password"
            value={password}
            onChangeText={(text) => handleInputChange('password', text)}
            borderColor={isPasswordValid ? 'green' : '#D9D9D9'}
            secureTextEntry={true}
            iconName="lock"
            ref={passwordRef}
            nextRef={confirmPasswordRef}
          ></SignUpInput>
          <SignUpInput
            keyboardType="default"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={(text) => handleInputChange('confirmPassword', text)}
            borderColor={isConfirmPasswordValid ? 'green' : '#D9D9D9'}
            secureTextEntry={true}
            iconName="lock"
            ref={confirmPasswordRef}
          ></SignUpInput>
        </View>
        {/* BUTTON */}
        <View style={styles.buttonContainerStyle}>
          <ButtonComponent
            styleType="signUpPageButtonStyle"
            disabled={!isContinueButtonEnabled}
            onPress={navigateToSecondSignUpPage}
            text="Continue"
          />
        </View>
        {/*DIVIDER */}

        <View style={styles.dividerContainerStyle}>
          <DividerComponent text="or" />
        </View>
        {/* SOCIALS */}
        <View style={styles.socialsContainerStyle}>
          <View style={styles.socialButtonsContainerStyle}>
            <IconButton label="google" />
            <IconButton label="facebook" />
          </View>
          <Text style={styles.socialsTextStyle}>
            Already have an account?
            <Text
              style={styles.socialsLinkStyle}
              onPress={navigateToSignInPage}
            >
              {''} Sign in
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default FirstSignUpPage;

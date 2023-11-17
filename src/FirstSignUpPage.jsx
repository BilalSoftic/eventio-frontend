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
import SignUpInput from './components/SignUpInput';
import Button from './components/Button';
import Divider from './components/Divider';
import { useState, useRef } from 'react';
import IconButton from './components/IconButton';

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
    <View style={styles.wrapper}>
      {/* BACKGROUND IMAGE */}
      <Image
        style={styles.backgroundImage}
        source={require('../assets/img/FirstSignUpPageBackground.png')}
      ></Image>
      {/* INTERACTIVE BOX */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        style={styles.interactiveBox}
      >
        <Text style={styles.mainHeader}>Sign up</Text>
        {/* PAGE NUMBERING */}
        <PageNumberingComponent signUpPageNumber="FirstSignUpPage" />
        {/* FORM */}
        <View style={styles.inputsWrapper}>
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
          <Button
            styleType="signUpPageButton"
            disabled={!isContinueButtonEnabled}
            onPress={navigateToSecondSignUpPage}
            text="Continue"
          />
        </View>
        {/*DIVIDER */}
        <Divider text="or" />
        {/* SOCIALS */}
        <View style={styles.socialsWrapper}>
          <View style={styles.socialButtonsWrapper}>
            <IconButton label="google" />
            <IconButton label="facebook" />
          </View>
          <Text style={styles.socialsText}>
            Already have an account?
            <Text style={styles.socialsLink} onPress={handleSignInPress}>
              {''} Sign in
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  backgroundImage: {
    minWidth: '150%',
    position: 'absolute',
    top: 0,
  },
  interactiveBox: {
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
  mainHeader: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  inputsWrapper: {
    flex: 1,
    marginTop: 10,
  },
  linesWrapper: {
    padding: 5,
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: { flex: 3, padding: 0.5, backgroundColor: '#EAEAEA' },
  middleText: { fontSize: 16, marginHorizontal: 10, color: '#707070' },
  socialsWrapper: {
    flexDirection: 'column',
  },
  socialButtonsWrapper: {
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialsText: {
    alignSelf: 'center',
  },
  socialsLink: {
    color: '#004972',
  },
});

export default FirstSignUpPage;

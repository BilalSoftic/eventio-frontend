import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import SignUpInput from './components/SignUpInput';
import Button from './components/Button';
import Divider from './components/Divider';
import { useState, useRef } from 'react';
import IconButton from './components/IconButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SignInPage = ({ navigation }) => {
  /* State */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);

  /* Page navigation */
  /* const navigateTo = () => {
    navigation.navigate('');
  }; */

  /* useRef */
  const passwordRef = useRef();

  /* Validation function */
  const validateEmail = (input) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(input);
  };
  const validatePassword = (input) => {
    return input.length >= 6;
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
      default:
        break;
    }
  };

  /* Enable Button */
  const isContinueButtonEnabled = isEmailValid && isPasswordValid;

  /* Handle links */
  const handleSignUpPress = () => {
    const signInUrl = 'https://google.com';
    Linking.openURL(signInUrl);
  };
  const handleForgotPasswordPress = () => {
    const signInUrl = 'https://google.com';
    Linking.openURL(signInUrl);
  };
  return (
    <View style={styles.wrapper}>
      {/* BACKGROUND IMAGE */}
      <Image
        style={styles.backgroundImage}
        source={require('../assets/img/SignInPageBackground.png')}
      ></Image>
      {/* INTERACTIVE BOX */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        style={styles.interactiveBox}
      >
        <Text style={styles.mainHeader}>Sign in</Text>
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
          ></SignUpInput>
          <View style={styles.textWrapper}>
            <BouncyCheckbox
              style={styles.checkbox}
              size={20}
              fillColor="#004972"
              unfillColor="#FFFFFF"
              text="Remember Me"
              iconStyle={{ borderColor: '#004972', borderRadius: 5 }}
              innerIconStyle={{ borderWidth: 2, borderRadius: 5 }}
              textStyle={{
                marginLeft: -8,
                fontSize: 15,
                textDecorationLine: 'none',
                color: 'rgba(70, 70, 70, 0.5)',
              }}
            />
            <Text
              style={styles.forgotPassword}
              onPress={handleForgotPasswordPress}
            >
              forgot password?
            </Text>
          </View>

          <Button
            styleType="signUpPageButton"
            disabled={!isContinueButtonEnabled}
            /* onPress={navigateTo} */
            text="sign in"
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
            Don't have an account?
            <Text style={styles.socialsLink} onPress={handleSignUpPress}>
              {''} Sign up
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
    minWidth: '110%',
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
  textWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  forgotPassword: {
    fontSize: 15,
    textTransform: 'capitalize',
    color: '#004972',
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

export default SignInPage;

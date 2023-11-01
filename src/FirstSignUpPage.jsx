import { StyleSheet, View, Text, Image, Linking } from 'react-native';
import SignUpInput from './components/SignUpInput';
import SignUpPageButton from './components/SignUpPageButton';
import { useState } from 'react';
import IconButton from './components/IconButton';

function FirstSignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setConfirmPasswordValid] = useState(false);

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

  const handleEmailChange = (text) => {
    setEmail(text);
    setEmailValid(validateEmail(text));
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordValid(validatePassword(text));
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setConfirmPasswordValid(validateConfirmPassword(password, text));
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
      <Image
        style={styles.backgroundImage}
        source={require('../assets/img/FirstSignUpPageBackground.png')}
      ></Image>
      {/* INTERACTIVE BOX */}
      <View style={styles.interactiveBox}>
        <Text style={styles.mainHeader}>Sign up</Text>
        {/* NUMBERS */}
        <View style={styles.numbersWrapper}>
          {/* First number */}
          <View style={styles.firstNumberContainer}>
            <View style={[styles.circle, styles.blueBackground]}>
              <Text style={[styles.number, styles.whiteNumber]}>1</Text>
            </View>
            <Text style={styles.numberHeader}>General</Text>
          </View>
          <View style={styles.circlesLineConnection} />
          {/* Second number */}
          <View style={styles.secondNumberContainer}>
            <View style={[styles.circle, styles.opacityCircle]}>
              <Text style={[styles.number, styles.darkBlueNumber]}>2</Text>
            </View>
            <Text style={styles.numberHeader}>Personal information</Text>
          </View>
        </View>

        {/* Input form */}
        <View style={styles.inputsWrapper}>
          <SignUpInput
            placeholder="E-mail"
            value={email}
            onChangeText={handleEmailChange}
            borderColor={isEmailValid ? 'green' : '#D9D9D9'}
            placeholderTextColor="rgba(70, 70, 70, 0.5)"
            iconName="envelope"
          ></SignUpInput>
          <SignUpInput
            placeholder="Password"
            value={password}
            onChangeText={handlePasswordChange}
            borderColor={isPasswordValid ? 'green' : '#D9D9D9'}
            secureTextEntry={true}
            placeholderTextColor="rgba(70, 70, 70, 0.5)"
            iconName="lock"
          ></SignUpInput>
          <SignUpInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            borderColor={isConfirmPasswordValid ? 'green' : '#D9D9D9'}
            secureTextEntry={true}
            placeholderTextColor="rgba(70, 70, 70, 0.5)"
            iconName="lock"
          ></SignUpInput>
          <SignUpPageButton
            text="Continue"
            disabled={!isContinueButtonEnabled}
          />
        </View>
        {/* or */}
        <View style={styles.linesWrapper}>
          <View style={styles.line} />
          <Text style={styles.middleText}>or</Text>
          <View style={styles.line} />
        </View>
        {/* alternative login  */}
        <View style={styles.socialsWrapper}>
          <View style={styles.socialButtonsWrapper}>
            <IconButton />
            <IconButton />
          </View>
          <Text style={styles.socialsText}>
            Already have an account?
            <Text style={styles.socialsLink} onPress={handleSignInPress}>
              {''} Sign in
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: { flex: 1, alignItems: 'center', position: 'relative' },
  backgroundImage: {
    minHeight: 400,
    minWidth: 400,
    position: 'absolute',
    top: 0,
  },
  interactiveBox: {
    width: '100%',
    padding: 25,
    paddingBottom: 10,
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
  numbersWrapper: {
    width: 250,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  firstNumberContainer: {
    marginRight: -10,
    flexDirection: 'column',
    alignItems: 'center',
  },

  numberHeader: { fontSize: 14, marginTop: 5, opacity: 0.4 },

  secondNumberContainer: {
    marginLeft: -46,
    flexDirection: 'column',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#004972',
  },

  opacityCircle: {
    backgroundColor: 'rgba(0, 49, 72, 0.2)',
  },
  whiteNumber: {
    fontSize: 20,
    color: 'white',
  },
  darkBlueNumber: {
    fontSize: 20,
    color: '#004972',
  },

  circlesLineConnection: {
    width: 140,
    height: 2,
    marginBottom: 25,
    opacity: 0.2,
    backgroundColor: '#004972',
  },
  inputsWrapper: {
    flex: 1,
    marginTop: 20,
    gap: 10,
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

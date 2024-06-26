import {
  View,
  Text,
  Image,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState, useRef } from 'react';
import styles from './SignInPageStyle';
import InputComponent from '../components/InputComponent/InputComponent';
import ButtonComponent from '../components/ButtonComponent/ButtonComponent';
import DividerComponent from '../components/DividerComponent/DividerComponent';
import IconButtonComponent from '../components/IconButtonComponent/IconButtonComponent';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { signIn } from '../../eventio-api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import MessageModalComponent from '../components/MessageModalComponent/MessageModalComponent';
import LoadingComponent from '../components/LoadingComponent/LoadingComponent';

const imgPath = '../../assets/img/';

const SignInPage = () => {
  const navigation = useNavigation();

  /* State */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setEmailValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isMessage, setIsMessage] = useState('');
  const [loading, setLoading] = useState(false);

  /* Page navigation */
  const handleSignUpPress = () => {
    navigation.navigate('FirstSignUpPage');
  };
  const handleForgotPasswordPress = () => {
    const forgotPasswordUrl = 'https://google.com';
    Linking.openURL(forgotPasswordUrl);
  };

  const handleSignIn = () => {
    setLoading(true);
    signIn({ email, password })
      .then(async (res) => {
        console.log(res);
        if (res.status !== 200) {
          setLoading(false);
          setIsError(true);
          setIsMessage(res.data.message);
        } else {
          setLoading(false);
          setIsSuccess(true);
          setIsMessage(res.data.message);
          const token = res.data.token.plainTextToken;
          await AsyncStorage.setItem('token', token);
          navigation.navigate('MainPage');
        }
      })
      .catch((error) => {
        setLoading(false);
        setIsError(true);
        setIsMessage(error);
      });
  };

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

  /* Enable ButtonComponent */
  const isContinueButtonEnabled = isEmailValid && isPasswordValid;
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
        source={require(imgPath + 'SignInPageBackground.png')}
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
        <Text style={styles.mainHeaderTextStyle}>Sign in</Text>
        {/* FORM */}
        <View style={styles.inputsContainerStyle}>
          <InputComponent
            keyboardType='email-address'
            autoCapitalize='none'
            placeholder='E-mail'
            value={email}
            onChangeText={(text) => handleInputChange('email', text)}
            borderColor={isEmailValid ? 'green' : '#D9D9D9'}
            iconName='envelope'
            nextRef={passwordRef}
          ></InputComponent>
          <InputComponent
            keyboardType='default'
            placeholder='Password'
            value={password}
            onChangeText={(text) => handleInputChange('password', text)}
            borderColor={isPasswordValid ? 'green' : '#D9D9D9'}
            secureTextEntry={true}
            iconName='eye'
            ref={passwordRef}
          ></InputComponent>
        </View>
        <View style={styles.textWrapperStyle}>
          <BouncyCheckbox
            size={20}
            fillColor='#004972'
            unfillColor='#FFFFFF'
            text='Remember Me'
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
            style={styles.forgotPasswordStyle}
            onPress={handleForgotPasswordPress}
          >
            forgot password?
          </Text>
        </View>

        <View style={styles.buttonContainerStyle}>
          <ButtonComponent
            styleType='signUpPageButton'
            disabled={!isContinueButtonEnabled}
            onPress={handleSignIn}
            text='sign in'
          />
        </View>
        {/*DIVIDER */}
        <View style={styles.dividerContainerStyle}>
          <DividerComponent text='or' />
        </View>
        {/* SOCIALS */}
        <View style={styles.socialsContainerStyle}>
          <View style={styles.socialButtonsContainerStyle}>
            <IconButtonComponent imageName={'google'} />
            <IconButtonComponent imageName={'facebook'} />
          </View>
          <Text style={styles.socialsTextStyle}>
            Don't have an account?
            <Text style={styles.socialsLinkStyle} onPress={handleSignUpPress}>
              {''} Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignInPage;

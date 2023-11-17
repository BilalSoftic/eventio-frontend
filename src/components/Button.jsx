import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function WelcomeScreenButton(props) {
  const { disabled, onPress, text, styleType } = props;
  const buttonStyle =
    styleType === 'welcomeScreenButton'
      ? styles.welcomeScreenButton
      : styleType === 'signUpPageButton'
      ? styles.signUpPageButton
      : styles.welcomeScreenButton;
  return (
    <TouchableOpacity
      style={[buttonStyle, disabled ? { opacity: 0.5 } : { opacity: 1 }]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  welcomeScreenButton: {
    marginTop: 20,
    borderRadius: 10,
    width: '100%',
    paddingVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#004972',
  },
  signUpPageButton: {
    width: '100%',
    paddingVertical: 20,
    marginTop: 5,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#004972',
  },
  buttonText: {
    margin: 0,
    padding: 0,
    fontSize: 17,
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
});
export default WelcomeScreenButton;

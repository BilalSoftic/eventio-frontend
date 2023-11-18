import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function ButtonComponent(props) {
  const { disabled, onPress, text, styleType } = props;
  const buttonStyle =
    styleType === 'welcomeScreenButtonStyle'
      ? styles.welcomeScreenButtonStyle
      : styleType === 'signUpPageButtonStyle'
      ? styles.signUpPageButtonStyle
      : styles.welcomeScreenButtonStyle;
  return (
    <TouchableOpacity
      style={[buttonStyle, disabled ? { opacity: 0.5 } : { opacity: 1 }]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  welcomeScreenButtonStyle: {
    width: '100%',
    paddingVertical: 20,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#004972',
  },
  signUpPageButtonStyle: {
    width: '100%',
    paddingVertical: 20,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#004972',
  },
  buttonTextStyle: {
    margin: 0,
    padding: 0,
    fontSize: 17,
    color: '#FFFFFF',
    textTransform: 'capitalize',
  },
});
export default ButtonComponent;

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function SignUpPageButton(props) {
  const { disabled, onPress, text } = props;
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? { opacity: 0.5 } : { opacity: 1 }]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: '100%',

    paddingVertical: 20,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#004972',
  },
  buttonText: {
    flex: 1,
    margin: 0,
    padding: 0,
    fontSize: 17,
    color: '#FFFFFF',
  },
});
export default SignUpPageButton;

import { StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function SignUpInput(props) {
  const {
    placeholder,
    placeholderTextColor,
    secureTextEntry,
    iconName,
    value,
    onChangeText,
    borderColor,
  } = props;

  const inputWrapperStyle = {
    ...styles.inputWrapper,
    borderColor: borderColor,
  };
  return (
    <View style={inputWrapperStyle}>
      <TextInput
        type="text"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
      <View style={styles.iconContainer}>
        <Icon name={iconName} style={styles.icon} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputWrapper: {
    padding: 15,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  iconContainer: {
    width: 22,
    height: 22,
    marginLeft: 15,
    borderRadius: 3,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 49, 72, 0.1)',
  },
  icon: {
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#0C6A9F',
  },
});
export default SignUpInput;

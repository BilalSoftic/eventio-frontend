import { Text, TouchableOpacity } from 'react-native';
import styles from './ButtonComponentStyle';

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

export default ButtonComponent;

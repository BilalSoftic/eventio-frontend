import { Text, TouchableOpacity } from 'react-native';
import styles from './ButtonComponentStyle';

function ButtonComponent({ disabled, onPress, text }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? { opacity: 0.5 } : { opacity: 1 }]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.buttonTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
}

export default ButtonComponent;

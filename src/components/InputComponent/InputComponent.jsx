import { View, TextInput } from 'react-native';
import { forwardRef } from 'react';
import styles from './InputComponentStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const InputComponent = forwardRef((props, ref) => {
  const {
    placeholder,
    secureTextEntry,
    iconName,
    value,
    onChangeText,
    borderColor,
    nextRef,
    autoCapitalize,
    keyboardType,
    onChange,
  } = props;

  const inputContainerStyle = {
    ...styles.inputContainerStyle,
    borderColor: borderColor,
  };
  return (
    <View style={inputContainerStyle}>
      <TextInput
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        type='text'
        value={value}
        onChange={onChange}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor='rgba(70, 70, 70, 0.5)'
        ref={ref}
        onSubmitEditing={() => {
          nextRef ? nextRef.current.focus() : null;
        }}
        blurOnSubmit={false}
        returnKeyType={nextRef ? 'next' : 'done'}
      />
      <View style={styles.iconContainerStyle}>
        <Icon name={iconName} style={styles.iconStyle} />
      </View>
    </View>
  );
});

export default InputComponent;

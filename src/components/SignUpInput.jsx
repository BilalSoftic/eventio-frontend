import { StyleSheet, View, TextInput } from 'react-native';
import { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUpInput = forwardRef(
  (Input = (props, ref) => {
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
          type="text"
          value={value}
          onChange={onChange}
          onChangeText={onChangeText}
          style={styles.inputStyle}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          placeholderTextColor="rgba(70, 70, 70, 0.5)"
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
  })
);
const styles = StyleSheet.create({
  inputContainerStyle: {
    padding: 12,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#D9D9D9',
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
  },
  iconContainerStyle: {
    width: 22,
    height: 22,
    marginLeft: 15,
    borderRadius: 3,
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 49, 72, 0.1)',
  },
  iconStyle: {
    fontSize: 15,
    textAlign: 'center',
    alignSelf: 'center',
    color: '#0C6A9F',
  },
});
export default SignUpInput;

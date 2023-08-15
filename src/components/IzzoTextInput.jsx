import { StyleSheet, Text, TextInput, View } from 'react-native';
import { forwardRef } from 'react';

const IzzoTextInput = forwardRef(
  (Input = (props, ref) => {
    const { inputName, handleChangeKey, nextRef, user, handleChange } = props;
    return (
      <View style={styles.izzoInputView}>
        <Text style={styles.izzoInputLabel}>{inputName}</Text>
        <TextInput
          style={styles.izzoTextInput}
          placeholder={inputName}
          ref={ref}
          onChangeText={(e) => handleChange(handleChangeKey, e)}
          value={user[handleChangeKey]}
          onSubmitEditing={() => {
            nextRef ? nextRef.current.focus() : null;
          }}
          blurOnSubmit={false}
          returnKeyType={nextRef ? 'next' : 'done'}
        />
      </View>
    );
  })
);
const styles = StyleSheet.create({
  izzoInputView: {
    backgroundColor: '#0C6A9F',
    marginVertical: 10,
    gap: 3,
  },
  izzoTextInput: {
    backgroundColor: '#FFFFFF',
    fontSize: 17,
    marginHorizontal: 15,
    height: 50,
    borderRadius: 8,
    paddingLeft: 15,
  },
  izzoInputLabel: {
    color: '#FFFFFF',
    paddingLeft: 27,
  },
  izzoHeader: {
    color: '#FFFFFF',
    fontSize: 40,
    alignSelf: 'center',
    marginVertical: 25,
  },
});

export default IzzoTextInput;

import { StyleSheet, Text, TextInput, View } from 'react-native';
import { forwardRef } from 'react';

const EventioTextInput = forwardRef(
  (Input = (props, ref) => {
    const { inputName, handleChangeKey, nextRef, user, handleChange } = props;
    return (
      <View style={styles.eventioInputView}>
        <Text style={styles.eventioInputLabel}>{inputName}</Text>
        <TextInput
          style={styles.eventioTextInput}
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
  eventioInputView: {
    backgroundColor: '#0C6A9F',
    marginVertical: 10,
    gap: 3,
  },
  eventioTextInput: {
    backgroundColor: '#FFFFFF',
    fontSize: 17,
    marginHorizontal: 15,
    height: 50,
    borderRadius: 8,
    paddingLeft: 15,
  },
  eventioInputLabel: {
    color: '#FFFFFF',
    paddingLeft: 27,
  },
  eventioHeader: {
    color: '#FFFFFF',
    fontSize: 40,
    alignSelf: 'center',
    marginVertical: 25,
  },
});

export default EventioTextInput;
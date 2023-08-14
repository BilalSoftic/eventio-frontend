import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import { useState, useRef } from 'react';
import { initialUserState } from '../config/registrationConfig';
import { registerUser } from '../izo-api';
import IzzoTextInput from './components/IzzoTextInput';

export default function Registration() {
  const [user, setUser] = useState({ ...initialUserState });

  const submitRegistration = async () => {
    registerUser(JSON.stringify(user));
  };

  const ref_lastName = useRef(),
    ref_userName = useRef(),
    ref_email = useRef(),
    ref_password = useRef(),
    ref_password_confirmation = useRef();

  const handleChange = (label, value) => {
    setUser({
      ...user, // Copy the old fields
      [label]: value, // But override this one
    });
  };

  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      style={styles.container}
    >
      <Text style={styles.izzoHeader}>Sign Up</Text>
      <IzzoTextInput
        inputName="First Name"
        handleChangeKey="first_name"
        nextRef={ref_lastName}
        user={user}
        handleChange={handleChange}
      />
      <IzzoTextInput
        inputName="Last Name"
        handleChangeKey="last_name"
        ref={ref_lastName}
        nextRef={ref_userName}
        user={user}
        handleChange={handleChange}
      />
      <IzzoTextInput
        inputName="User Name"
        handleChangeKey="username"
        ref={ref_userName}
        nextRef={ref_email}
        user={user}
        handleChange={handleChange}
      />
      <IzzoTextInput
        inputName="E-mail"
        handleChangeKey="email"
        ref={ref_email}
        nextRef={ref_password}
        user={user}
        handleChange={handleChange}
      />
      <IzzoTextInput
        inputName="Password"
        handleChangeKey="password"
        ref={ref_password}
        nextRef={ref_password_confirmation}
        user={user}
        handleChange={handleChange}
      />
      <IzzoTextInput
        inputName="Confirm Password"
        handleChangeKey="password_confirmation"
        ref={ref_password_confirmation}
        user={user}
        handleChange={handleChange}
      />

      <Button
        onPress={submitRegistration}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C6A9F',
    marginTop: 30,
  },
  izzoHeader: {
    color: '#FFFFFF',
    fontSize: 40,
    alignSelf: 'center',
    marginVertical: 25,
  },
});

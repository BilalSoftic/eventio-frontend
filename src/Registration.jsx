import { StyleSheet, ScrollView } from 'react-native';
import { useState, useRef } from 'react';
import { Text } from '@gluestack-ui/themed';
import { initialUserState } from '../config/registrationConfig';
import { registerUser } from '../eventio-api';
import EventioTextInput from './components/EventioTextInput';
import EventioButton from './components/EventioButton';

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
      <Text size="3xl" style={styles.eventioHeader}>
        Sign Up
      </Text>
      <EventioTextInput
        inputName="First Name"
        handleChangeKey="first_name"
        nextRef={ref_lastName}
        user={user}
        handleChange={handleChange}
      />
      <EventioTextInput
        inputName="Last Name"
        handleChangeKey="last_name"
        ref={ref_lastName}
        nextRef={ref_userName}
        user={user}
        handleChange={handleChange}
      />
      <EventioTextInput
        inputName="User Name"
        handleChangeKey="username"
        ref={ref_userName}
        nextRef={ref_email}
        user={user}
        handleChange={handleChange}
      />
      <EventioTextInput
        inputName="E-mail"
        handleChangeKey="email"
        ref={ref_email}
        nextRef={ref_password}
        user={user}
        handleChange={handleChange}
      />
      <EventioTextInput
        inputName="Password"
        handleChangeKey="password"
        ref={ref_password}
        nextRef={ref_password_confirmation}
        user={user}
        handleChange={handleChange}
      />
      <EventioTextInput
        inputName="Confirm Password"
        handleChangeKey="password_confirmation"
        ref={ref_password_confirmation}
        user={user}
        handleChange={handleChange}
      />
      <EventioButton title="Submit" submitRegistration={submitRegistration} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C6A9F',
  },
  eventioHeader: {
    color: '#FFFFFF',
    fontSize: 40,
    marginTop: 60,
    alignSelf: 'center',
  },
});

import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useState, useRef } from "react";
import { initialUserState } from "../config/registrationConfig";
import { registerUser } from "../izo-api";

export default function Registration() {
  const [user, setUser] = useState({ ...initialUserState });

  const submitRegistration = async () => {
    registerUser(JSON.stringify(user));
  };

  const ref_lastName = useRef(),
    ref_username = useRef(),
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
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <View>
        <Text>First Name</Text>
        <TextInput
          placeholder="First Name"
          onChangeText={(e) => handleChange("first_name", e)}
          value={user.first_name}
          onSubmitEditing={() => {
            ref_lastName.current.focus();
          }}
          blurOnSubmit={false}
          returnKeyType="next"
        />
      </View>
      <View>
        <Text>Last Name</Text>
        <TextInput
          placeholder="Last Name"
          ref={ref_lastName}
          value={user.last_name}
          onChangeText={(e) => handleChange("last_name", e)}
          onSubmitEditing={() => {
            ref_username.current.focus();
          }}
          blurOnSubmit={false}
          returnKeyType="next"
        />
      </View>
      <View>
        <Text>UserName</Text>
        <TextInput
          placeholder="Display Name"
          ref={ref_username}
          value={user.username}
          onChangeText={(e) => handleChange("username", e)}
          onSubmitEditing={() => {
            ref_email.current.focus();
          }}
          blurOnSubmit={false}
          returnKeyType="next"
        />
      </View>
      <View>
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          ref={ref_email}
          value={user.email}
          onChangeText={(e) => handleChange("email", e)}
          onSubmitEditing={() => {
            ref_password.current.focus();
          }}
          blurOnSubmit={false}
          returnKeyType="next"
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          ref={ref_password}
          value={user.password}
          onChangeText={(e) => handleChange("password", e)}
          onSubmitEditing={() => {
            ref_password_confirmation.current.focus();
          }}
          blurOnSubmit={false}
          returnKeyType="next"
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          placeholder="Confirm Password"
          ref={ref_password_confirmation}
          value={user.password_confirmation}
          onChangeText={(e) => handleChange("password_confirmation", e)}
        />
      </View>
      <Button
        onPress={submitRegistration}
        title="Submit"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 40,
    marginLeft: 5,
  },
});

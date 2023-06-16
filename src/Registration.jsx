import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useState, useRef } from "react";
import { intialUserState } from "../config/registrationConfig";

export default function Registration() {
  const [user, setUser] = useState({ ...intialUserState });

  const submitRegistration = () => {
    console.log(user);
  };

  const ref_lastName = useRef();

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
          onChangeText={(e) => handleChange("firstName", e)}
          value={user.firstName}
          onSubmitEditing={() => {
            ref_lastName.current.focus();
          }}
          // Sta je ovo???
          // blurOnSubmit={false}
          returnKeyType='next'
        />
      </View>
      <View>
        <Text>Last Name</Text>
        <TextInput
          placeholder="Last Name"
          ref={ref_lastName}
          value={user.lastName}
          onChangeText={(e) => handleChange("lastName", e)}
        />
      </View>
      <View>
        <Text>UserName</Text>
        <TextInput
          placeholder="Display Name"
          value={user.userName}
          onChangeText={(e) => handleChange("userName", e)}
        />
      </View>
      <View>
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          value={user.email}
          onChangeText={(e) => handleChange("email", e)}
        />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          value={user.password}
          onChangeText={(e) => handleChange("password", e)}
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

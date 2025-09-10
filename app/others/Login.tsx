import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState<string>("zorigoo.nexus@yahoo.com");
  const [password, setPassword] = useState<string>("123456");
  const [loading, setLoading] = useState<boolean>(false);
  async function login() {
    const url = "https://api.blackcandy.io/v1/login";
    setLoading(true);
    const response = await axios.post(
      url,
      { Email: email, Password: password },
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const data = response.data.json();
    const token = data.token;
    AsyncStorage.setItem("token", token);
    console.log("Now data");
    console.log(token);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        keyboardType="email-address"
      ></TextInput>
      <Button title="Login" onPress={login} />
      <Text>

        email is {email} and password is {password}
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
});

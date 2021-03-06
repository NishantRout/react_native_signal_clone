import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { View, Text, Keyboard } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../config/firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView
      onPress={() => Keyboard.dismiss()}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Signal-Logo.svg/1200px-Signal-Logo.svg.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          //autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          color="#ffffff"
          placeholderTextColor="#ffffff"
          inputContainerStyle={{
            borderColor: "#ffffff",
          }}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          color="#ffffff"
          placeholderTextColor="#ffffff"
          inputContainerStyle={{
            borderColor: "#ffffff",
          }}
          onSubmitEditing={signIn}
        />
      </View>
      <Button
        containerStyle={styles.button}
        onPress={signIn}
        title="Login"
        titleStyle={{
          color: "#3976F0",
        }}
        buttonStyle={{ backgroundColor: "#ffffff" }}
      />
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate("Register")}
        type="outline"
        title="Register"
        titleStyle={{
          color: "#fff",
        }}
        buttonStyle={{ borderColor: "#ffffff", borderWidth: 1 }}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#3976F0",
  },
  inputContainer: {
    width: 300,
  },
  input: {
    color: "white",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});

import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Platform } from "react-native";

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from "../Login/style";
import { AuthContext } from "../../context/auth";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();

  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handle() {
    signUp(name, email, password)
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""}>
        <AreaInput>
          <Input
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Nome"
          />
        </AreaInput>

        <AreaInput>
          <Input
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
        </AreaInput>

        <AreaInput>
          <Input
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Senha"
          />
        </AreaInput>

        <SubmitButton onPress={handle}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

export default function RecuperarSenha() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <View>
        <ImageBackground
          source={require("../../assets/images/imagemCadastro.png")}
          style={styles.topImage}
        >
          <View style={styles.overlay} />
        </ImageBackground>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Recuperar senha</Text>
        <Text style={styles.description}>
          Digite seu e-mail para receber o link {"\n"} de recuperação.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#999"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/auth/pwconfirm")}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/auth/Login")}>
          <Text style={styles.voltar}>Voltar para o login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topImage: {
    width: "100%",
    height: 376,
    resizeMode: "cover",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#0B2A3A",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  title: {
    padding: 20,
    marginTop: 10,
    fontSize: 20,
    color: "#FFF",
    marginVertical: 15,
    fontWeight: "intermediate",
    alignSelf: "center",
  },
  description: {
    color: "#E8F1F2",
    fontSize: 15,
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#E8F1F2",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 40,
    color: "#000",
  },
  button: {
    backgroundColor: "#006494",
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  voltar: {
    color: "#FFF",
    fontSize: 13,
    textAlign: "center",
  },
});

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";
import { useRouter } from "expo-router";
import BottomNav from "../../components/bottomNav";

export default function EditarUsuario() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/user/userPage")}
      >
        <Image
          source={require("../../assets/images/voltarBtn.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Avatar e ícone de editar */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarCircle}></View>
        <Text style={styles.userName}>Yasmin</Text>
      </View>

      {/* Campos do formulário */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#a0aec0"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="exemplo@email.com"
          placeholderTextColor="#a0aec0"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder="(00) 00000-0000"
          placeholderTextColor="#a0aec0"
          value={phone}
          onChangeText={setPhone}
        />
        <TouchableOpacity
          style={styles.blueButton}
          onPress={() => router.push("/auth/newpw")}
        >
          <Text style={styles.blueButtonText}>Alterar Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.blueButton}>
          <Text style={styles.blueButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B2A3A",
    paddingTop: 50,
    paddingHorizontal: 18,
    position: "relative",
  },
  backIcon: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 2,
    marginTop: -2,
  },
  avatarContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 18,
    position: "relative",
  },
  avatarCircle: {
    width: 160,
    height: 160,
    borderRadius: 5200,
    backgroundColor: "#ffff",
    marginBottom: 20,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: "relative",
  },
  userName: {
    color: "#fff",
    fontSize: 29,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  formContainer: {
    marginTop: 30,
    marginBottom: 30,
  },
  label: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 2,
    marginLeft: 6,
  },
  input: {
    backgroundColor: "#23344A",
    color: "#fff",
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 15,
  },
  blueButton: {
    backgroundColor: "#006494",
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  blueButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#23344A",
    borderRadius: 18,
    paddingVertical: 10,
    position: "absolute",
    left: 10,
    right: 10,
    bottom: 10,
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 30,
    padding: 4,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 20,
  },
});
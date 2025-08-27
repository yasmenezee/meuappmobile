import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Inicio() {
  return (
    <ImageBackground
      source={require("../../../assets/images/fundo.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
      
        <Image source={require("../../../assets/images/Logo.png")} style={styles.logo} />

      
        <Text style={styles.title}>Hotel Brasileiro</Text>

        
        <View style={styles.starsContainer}>
          <Image source={require("../../../assets/images/star.png")} style={styles.star} />
          <Image source={require("../../../assets/images/star.png")} style={styles.star} />
          <Image source={require("../../../assets/images/star.png")} style={styles.star} />
          <Image source={require("../../../assets/images/star.png")} style={styles.star} />
          <Image source={require("../../../assets/images/star.png")} style={styles.star} />
        </View>

        
        <Text style={styles.slogan}>
          Aqui, o relógio se rende ao seu compasso
        </Text>
        <Text style={styles.subtitle}>
          Um hotel que é menos lugar, mais estado de espírito
        </Text>

       
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Prosseguir para login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Criar minha conta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)", 
    margin: 20,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  Logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
  starsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  star: {
    width: 25,
    height: 25,
    marginHorizontal: 2,
    resizeMode: "contain",
  },
  slogan: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#ddd",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

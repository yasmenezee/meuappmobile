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
      {/* OVERLAY: Aumente a opacidade para escurecer mais o fundo (ex: rgba(0,0,0,0.7)) */}
      <View style={styles.overlay}>
      
        {/* LOGO: Verifique se o nome do estilo está correto (deve ser "logo" e não "Logo") */}
        <Image source={require("../../../assets/images/Logo.png")} style={styles.logo} />



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

        {/* BOTÕES: Diferenciar o visual do segundo botão (transparente com borda) */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Prosseguir para login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister}>
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
    backgroundColor: "rgba(0,0,0,0.6)", // Aumentei para 0.6
    flex: 1, // Adicionei para ocupar toda a tela
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center",
    padding: 20, // Mantive o padding interno
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    position: 'absolute', 
    top: 30,            
    alignSelf: 'center',  
  },
    title: {
      fontSize: 26,
      color: "#fff",
      fontWeight: "bold",
      marginBottom: 10,
    },
    starsContainer: {
      flexDirection: "row",
      marginBottom: 60,
      marginLeft: 10,
      gap: 10,
    },
    star: {
      width: 25,
      height: 25,
      marginHorizontal: 2,
      resizeMode: "contain",
     
    },
    slogan: {
      fontSize: 24,
      color: "#fff",
      textAlign: "center",
      marginBottom: 5,
      fontWeight: "600",
    },
    subtitle: {
      fontSize: 16,
      color: "#ddd",
      textAlign: "center",
      marginBottom: 180,
      fontWeight: "500",
    },
    button: {
      backgroundColor: "#", 
      paddingVertical: 12,
      borderRadius: 10,
      marginTop: 220,
      width: "100%",
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    buttonRegister: {
      backgroundColor: "#00405C",
      paddingVertical: 12,
      borderRadius: 10,
      marginTop: 10,
      width: "100%",
      alignItems: "center",
    },
  });
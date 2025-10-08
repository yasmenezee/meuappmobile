import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import BottomNav from "../../components/bottomNav";
import { useRouter } from "expo-router";

export default function ReservaSuccess({ navigation }) {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/reservaBg.png")}
      style={styles.background}
    >
      {/* Back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../assets/images/voltarBtn.png")}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Bottom sheet */}
      <View style={styles.bottomSheet}>
        <Text style={styles.title}>Quarto reservado com sucesso</Text>
        <Text style={styles.subtitle}>Seu quarto já está garantido!</Text>

        <Text style={styles.label}>Data de entrada: <Text style={styles.value}>12/05/2025</Text></Text>
        <Text style={styles.label}>Data de saída: <Text style={styles.value}>15/05/2025</Text></Text>
        <Text style={styles.label}>Hóspedes: <Text style={styles.value}>2 adultos</Text></Text>
        <Text style={styles.label}>
          Local: <Text style={styles.value}>Rua das Palmeiras, 123 - São Paulo, SP</Text>
        </Text>

        <TouchableOpacity
          style={styles.confirmBtn}
          onPress={() => router.push("/home/home")}
        >
          <Text style={styles.confirmText}>Voltar para o início</Text>
        </TouchableOpacity>
      </View>

      <BottomNav />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width:410,
    height: 500,
    justifyContent: "flex-end", // keeps the sheet at the bottom
  },

  backButton: {
    position: "absolute",
    top: 60,
    left: 30,
    padding: 4,
    borderRadius: 20,
  },

  backIcon: {
    width: 43,
    height: 40,
    tintColor: "#fff",
  },

  bottomSheet: {
    height: 500,
    maxWidth: 410,
    backgroundColor: "rgba(12,34,63)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },

  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 4,
  },

    subtitle: {
    fontSize: 15,
    color: "#fff",
    marginBottom: 30,
  },

  room: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 16,
  },

  label: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
  },

  value: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "semi-bold",
  },

  confirmBtn: {
    backgroundColor: "#006494",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 60,
    alignItems: "center",
    width: '90%', 
    marginHorizontal: 'center',
  },

  confirmText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },
});

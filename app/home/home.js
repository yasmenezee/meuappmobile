import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Header from "../../components/header";
import BottomNav from "../../components/bottomNav";

export default function TelaInicial() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Logo e título */}
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/imagemCadastro.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.hotelName}>Hotel{"\n"}Brasileiro</Text>
        </View>

        {/* Saudação */}
        <Text style={styles.greeting}>Olá, [Usuário]</Text>

        {/* Título Seção */}
        <Text style={styles.sectionTitle}>Quartos</Text>
        <Text style={styles.sectionSubtitle}>
          Clique em um quarto e agende sua estadia
        </Text>

        {/* Card do Quarto */}
        <View style={styles.card}>
          <Image
            source={require("../../assets/images/imagemCadastro.png")}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Quarto Aconchegante & Moderno</Text>
            <Text style={styles.cardText}>
              Conforto e elegância em um ambiente acolhedor.{"\n"}
              • Cama confortável com roupa de cama sofisticada{"\n"}
              • Decoração com plantas e quadros artísticos{"\n"}
              • Iluminação suave e moderna{"\n"}
              • Ar-condicionado para o seu bem-estar{"\n"}
              • Janela ampla com luz natural
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver Detalhes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a2a43", // fundo azul escuro
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  hotelName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  greeting: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  sectionSubtitle: {
    color: "#fff",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#006699",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});

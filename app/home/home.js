import React, { useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/header";
import BottomNav from "../../components/bottomNav";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const rooms = [
  {
    id: "1",
    title: "Quarto Aconchegante & Moderno",
    description:
      "Conforto e elegância em um ambiente acolhedor.\n\n- Cama confortável\n- Decoração moderna\n- Iluminação suave\n- Ar-condicionado\n- Janela ampla",
    image: require("../../assets/images/quartoimg.png"), // placeholder
  },
];

export default function Home() {
  // react-native-reanimated-carousel does not use ref for imperative control in this use case

  // react-native-reanimated-carousel expects renderItem to receive { item, index }
  const renderItem = ({ item, index }) => (
    <View style={styles.card} key={item.id || index}>
      <Image source={item.image} style={styles.roomImage} resizeMode="cover" />
      <View style={styles.cardContent}>
        <Text style={styles.roomTitle}>{item.title}</Text>
        <Text style={styles.roomDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Top Image with Overlay */}
        <ImageBackground
          source={require("../../assets/images/homeBack.png")} // placeholder
          style={styles.topImage}
        >
          <View style={styles.overlayTextContainer}>
            <Text style={styles.overlayText}>
              Aqui, o relógio se rende ao seu compasso
            </Text>
          </View>
        </ImageBackground>

        {/* Rooms Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quartos</Text>
          <Text style={styles.sectionSubtitle}>
            Clique em um quarto e agende sua estadia
          </Text>

          <Carousel
            width={width * 0.8}
            height={400}
            data={rooms}
            renderItem={renderItem}
            style={{ marginTop: 20, alignSelf: 'center' }}
            loop={false}
            autoPlay={false}
            panGestureHandlerProps={{ activeOffsetX: [-10, 10] }}
          />
        </View>
      </ScrollView>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D2B3E",
  },
  topImage: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  overlayTextContainer: {
    padding: 20,
  },
  overlayText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  roomImage: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    padding: 15,
  },
  roomTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  roomDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#006494",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

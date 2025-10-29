import React from "react";
import {
  ScrollView,
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
import { useRouter } from "expo-router";
import { useSharedValue } from "react-native-reanimated";

const { width } = Dimensions.get("window");

export default function Home() {
  const progress = useSharedValue(0);
  const router = useRouter();

  // Static data for rooms
  const rooms = [
    {
      id: 1,
      nome: "Quarto Luxo",
      descricao: "Um quarto confortável com vista para o mar.",
      imagem: require("../../assets/images/quartoimg.png"),
    },
    {
      id: 2,
      nome: "Quarto Simples",
      descricao: "Aconchegante e econômico.",
      imagem: require("../../assets/images/quartoimg.png"),
    },
  ];

  // Static data for encounters
  const encontros = [
    {
      id: "1",
      title: "Alvorada Secreta",
      time: "04h30 – 06h00",
      description:
        "Um pacto com a madrugada. Seguiremos, em silêncio, até o forno de barro onde o pão nasce sob as últimas estrelas.",
      image: require("../../assets/images/horario1.png"),
    },
    {
      id: "2",
      title: "Passeio Surpresa",
      time: "19h00 – 21h00",
      description: "Uma caminhada para encontrar o inesperado ao cair da noite.",
      image: require("../../assets/images/horario2.png"),
    },
  ];

  // Render a single room card
  const renderRoom = ({ item }) => (
    <View style={styles.card} key={item.id}>
      <Image source={item.imagem} style={styles.roomImage} resizeMode="cover" />
      <View style={styles.cardContent}>
        <Text style={styles.roomTitle}>{item.nome}</Text>
        <Text style={styles.roomDescription}>{item.descricao}</Text>
        {item.id === 1 && (
          <Text style={styles.roomExtra}>
            Cama confortável com roupa de cama sofisticada
            {'\n'}Decoração com plantas e quadros artísticos
            {'\n'}Iluminação suave e moderna
            {'\n'}Ar-condicionado para o seu bem-estar
            {'\n'}Janela ampla com luz natural
          </Text>
        )}
        <TouchableOpacity
          onPress={() => router.push(`/reservas/quartoDesc?id=${item.id}`)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Render a single encounter card
  const renderEncontro = ({ item }) => (
    <View style={styles.encontroCard} key={item.id}>
      <ImageBackground
        source={item.image}
        style={styles.encontroImage}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.encontroOverlay}>
          <Text style={styles.encontroTime}>{item.time}</Text>
          <Text style={styles.encontroTitle}>{item.title}</Text>
          <Text style={styles.encontroDescription}>{item.description}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Header />
        {/* Top Image with Overlay */}
        <ImageBackground
          source={require("../../assets/images/homeBack.png")}
          style={styles.topImage}
        >
          <View style={styles.overlayTextContainer}>
            <Text style={styles.overlayText}>
              Aqui, o relógio se rende ao seu {'\n'}compasso
            </Text>
          </View>
        </ImageBackground>

        {/* Rooms Section */}
        <View style={[styles.section, { marginBottom: 4 }]}>
          <Text style={styles.sectionTitle}>Quartos</Text>
          <Text style={styles.sectionSubtitle}>
            Clique em um quarto e agende sua estadia
          </Text>

          <Carousel
            data={rooms}
            renderItem={({ item }) => renderRoom({ item })}
            minHeight={500}
            loop={true}
            pagingEnabled={true}
            snapEnabled={true}
            width={width * 0.8}
            style={{
              width: width * 0.8,
              alignSelf: "center",
            }}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 30,
            }}
            onProgressChange={progress}
          />
        </View>

        {/* Encounters Section */}
        <View style={[styles.sectionencontros, { marginTop: 20 }]}>
          <Text style={styles.sectionTitle}>Programamos encontros {'\n'}com o inesperado</Text>

          <Carousel
            data={encontros}
            renderItem={({ item }) => renderEncontro({ item })}
            minHeight={500}
            loop={true}
            pagingEnabled={true}
            snapEnabled={true}
            width={width * 0.8}
            style={{
              width: width * 0.8,
              alignSelf: "center",
            }}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 30,
            }}
            onProgressChange={progress}
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
    backgroundColor: "#13293D",
  },
  topImage: {
    width: "100%",
    height: 215,
    justifyContent: "flex-start",
  },
  overlayTextContainer: {
    padding: 20,
  },
  overlayText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 20,
    fontFamily: "Poppins",
  },
  section: {
    paddingHorizontal: 20,
    height: 525,
  },
  sectionencontros: {
    paddingHorizontal: 20,
    height: 600,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
    marginTop: 15,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#fff",
  },
  card: {
    minHeight: 400,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  roomImage: {
    width: "100%",
    height: 180,
  },
  cardContent: {
    padding: 19,
  },
  roomTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  roomDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  roomExtra: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
    lineHeight: 20,
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
  encontroCard: {
    borderRadius: 12,
    overflow: "hidden",
  },
  encontroImage: {
    width: "100%",
    height: 400,
    justifyContent: "flex-end",
  },
  encontroOverlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 15,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  encontroTime: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 4,
  },
  encontroTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  encontroDescription: {
    color: "#fff",
    fontSize: 14,
  },
});
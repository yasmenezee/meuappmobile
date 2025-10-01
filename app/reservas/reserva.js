import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BottomNav from "../../components/bottomNav";
import { useRouter } from "expo-router";

export default function ReservaHotel() {
  const router = useRouter();

  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [pessoas, setPessoas] = useState(0);

  return (
    <View style={styles.container}>
      {/* Imagem ocupa metade do topo da tela */}
      <Image
        source={require("../../assets/images/reservaBg.png")}
        style={styles.imagem}
        resizeMode="cover"
      />

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.push("/reservas/quartoDesc")}
            >
              <Image
                source={require("../../assets/images/voltarBtn.png")}
                style={styles.backIcon}
              />
            </TouchableOpacity>

      {/* Área inferior com inputs */}
      <View style={styles.info}>
        <Text style={styles.titulo}>Escolha suas datas </Text>

        <Text style={styles.label}>Quando seu descanso começa?</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 25/12/2025"
          placeholderTextColor="#000"
          value={inicio}
          onChangeText={setInicio}
        />

        <Text style={styles.label}>Quando a saudade vai bater?</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 30/12/2025"
          placeholderTextColor="#000"
          value={fim}
          onChangeText={setFim}
        />

        <Text style={styles.label}>Quantidade de pessoas</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => setPessoas(prev => Math.max(0, prev - 1))}
          >
            <Text style={styles.circleIcon}>−</Text>
          </TouchableOpacity>
          <Text style={styles.counterValue}>{pessoas}</Text>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => setPessoas(prev => prev + 1)}
          >
            <Text style={styles.circleIcon}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Botão de reservar */}
        <TouchableOpacity
          onPress={() => router.push(`/reservas/reserva`)}
          style={styles.botao}
        >
          <Text style={styles.textoBotao}>Reservar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    fontWeight: "bold",
  },
  imagem: {
    width: "100%",
    height: "40%",
  },
  info: {
    flex: 1,
    backgroundColor: "#142c42",
    padding: 25,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titulo: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 6,
    marginTop: 10,
    fontWeight: "semibold",

  },
  input: {
    backgroundColor: "#fff",
    color: "#fff",
    padding: 16,
    borderRadius: 15,
    fontSize: 16,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#006494",
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 20,
    marginTop: 5,
  },
  circleButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#006494",
    borderWidth: 2,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  circleIcon: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -3.7,
  },
  counterValue: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    minWidth: 40,
  },
  botao: {
    backgroundColor: "#006494",
    borderRadius: 12,
    paddingVertical: 12,
    marginTop: 30,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
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

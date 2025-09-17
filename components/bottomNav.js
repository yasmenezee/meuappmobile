import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function BottomNav() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={route.name === "Home" ? styles.active : styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={route.name === "Sobre" ? styles.active : styles.button}
        onPress={() => navigation.navigate("Sobre")}
      >
        <Text style={styles.text}>Sobre</Text>
      </TouchableOpacity>
      {/* Add more buttons as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#00405C",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  button: {
    padding: 10,
  },
  active: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
  text: {
    color: "#fff",
    fontSize: 16,
  },
});

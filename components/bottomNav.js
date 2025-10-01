import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Image } from "react-native";

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
        <Image
          source={require('../assets/images/home-img.png')}
          style={{ width: 34, height: 30 }}
        />
      </TouchableOpacity>
      
      <TouchableOpacity
        style={route.name === "Sobre" ? styles.active : styles.button}
        onPress={() => navigation.navigate("Sobre")}
      >
        {/* Replace with your desired SVG for Sobre */}
        <Image
          source={require('../assets/images/chat-img.png')}
          style={{ width: 34, height: 30 }}
        />
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
    left: 20,
    right: 20,
    bottom: 50,
    borderRadius: 30,
    elevation: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  button: {
    padding: 10,
  },
  active: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
  // text: {
  //   color: "#fff",
  //   fontSize: 16,
  // },
});

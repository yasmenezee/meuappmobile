import React from "react";
import { View, Image, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <StatusBar backgroundColor={styles.safeArea.backgroundColor} barStyle="light-content" />
      <View style={styles.header}>
        <Image
          source={require("../assets/images/Logo.png")}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 140,
    backgroundColor: "#13293D",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: 150,
    height: 60,
    marginBottom: 10,
  },
  safeArea: {
    backgroundColor: "#13293D",
  },
});
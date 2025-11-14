import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { useRouter } from "expo-router";

export default function HeaderChat() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/images/Logo.png")}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => router.push("/home/home")}
        style={styles.homeButton}
      >
        <Image
          source={require("../assets/images/voltarBtn.png")} // Replace with your actual image path
          style={styles.homeButtonIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: verticalScale(110),
    backgroundColor: '#13293D',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(14),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: 150,
    height: 60,
    marginTop: verticalScale(39),
    marginLeft: scale(2),
  },
  homeButton: {
    marginTop: verticalScale(39),
    marginRight: scale(2),
    padding: scale(5),
  },
  homeButtonIcon: {
    width: scale(37),
    height: scale(37),
  },
});

import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter, useSegments } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function BottomNav() {
  const router = useRouter();
  const segments = useSegments();
  const [userId, setUserId] = useState(null);

  // Get current route segment (e.g., "home", "chat", "user")
  const currentRoute = segments[segments.length - 1];

  // Fetch the signed-in user's ID from AsyncStorage
  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const id = await AsyncStorage.getItem("UserId");
        if (id) {
          setUserId(id);
        }
      } catch (error) {
        console.error("Failed to fetch user ID:", error);
      }
    };

    fetchUserId();
  }, []);

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={currentRoute === "home" ? styles.active : styles.button}
        onPress={() => router.push("/home/home")}
      >
        <Image
          source={require("../assets/images/home-img.png")}
          style={styles.iconhome}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={currentRoute === "chatPage" ? styles.active : styles.button}
        onPress={() => router.push("/chat/chatPage")}
      >
        <Image
          source={require("../assets/images/chat-img.png")}
          style={styles.iconchat}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={currentRoute === "userPage" ? styles.active : styles.button}
        onPress={() => {
          if (userId) {
            router.push(`/user/${userId}`);
          } else {
            console.warn(
              "User ID not found. Redirecting to default user page."
            );
            router.push("/user/userPage");
          }
        }}
      >
        <Image
          source={require("../assets/images/user-img.png")}
          style={styles.iconuser}
        />
      </TouchableOpacity>
      {/* Add more buttons with images as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 350,
    height: 75,
    backgroundColor: "#004F70",
    position: "absolute",
    left: 33,
    right: 20,
    bottom: 60,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 30, // Rounded corners for floating effect
  },
  button: {
    padding: 10,
  },
  active: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
  iconuser: {
    width: 32,
    height: 38,
  },
  iconhome: {
    width: 36,
    height: 34,
  },
  iconchat: {
    width: 39,
    height: 34,
  },
});

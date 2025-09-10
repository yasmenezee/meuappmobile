import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/*  Fluxo de autenticação */}
        <Stack.Screen name="src/principal/Home" />
        <Stack.Screen name="auth/TelaInicial" />
        <Stack.Screen name="auth/Login" />
        <Stack.Screen name="auth/Cadastro" />
        <Stack.Screen name="auth/RecuperarSenha" />
        <Stack.Screen name="auth/pwconfirm" />

        {/*  Fluxo principal (tabs) */}
        <Stack.Screen name="(tabs)" />

        {/*  Página de erro */}
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

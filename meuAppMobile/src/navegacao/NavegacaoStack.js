import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Telas de autenticação
import Login from "../../app/auth/Login";
import Cadastro from "../../app/auth/Cadastro";
import RecuperarSenha from "../../app/auth/RecuperarSenha";
import TelaInicial from "../../app/auth/TelaInicial";

// Telas que ficam dentro das Tabs
import Perfil from "../perfil/perfil";
import Reserva from "../reserva/Reserva";
import Principal from "../principal/Home";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tabs (visíveis só após login)
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Principal" component={Principal} />
      <Tab.Screen name="Reserva" component={Reserva} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

// Stack principal
export default function NavegacaoStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Telas que aparecem antes do login */}
      <Stack.Screen name="TelaInicial" component={TelaInicial} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />

      {/* Tabs só aparecem depois */}
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
}

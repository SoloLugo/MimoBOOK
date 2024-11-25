import { Stack } from 'expo-router';
import React from 'react';


export default function TabLayout() {

  return (
    <Stack
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="index"
        >
          <Stack.Screen name="index" options={{ title: 'Ingresa' }} />
          {/* <Stack.Screen name="signin" options={{ title: 'Ingresa' }} /> */}
          <Stack.Screen name="registrar" options={{ title: 'Registrate' }} />
          {/* Cuando el usuario se loggea */}
          <Stack.Screen name="(tabs)" options={{ title: 'tabs' }} />
          {/* Cuando el usuario se loggea */}
        </Stack>
  );
}

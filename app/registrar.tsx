import { router } from 'expo-router';
import React from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function registrar() {

  const Ingresar = async () =>{
    router.replace('/..')
  }

  return (
    <ScrollView>
      <View>
        <Text>
          Regístrate
        </Text>
        <Button title='ir'/>
        <Button title='Ingresa'
        onPress={Ingresar}/>
      </View>
    </ScrollView>
  )
}

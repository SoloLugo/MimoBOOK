import { router } from 'expo-router';
import React from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function index() {
  const Register = async () =>{
    router.replace('/registrar')
  }

  const Login = async () =>{
    router.replace('/(tabs)/home/MainScreen')
  }
  
  return (
    <ScrollView>
      <View>
        <Text>
          Ingresar
        </Text>
        <Button title='ir'
        onPress={Login}/>
        <Button title='Regístrate'
        onPress={Register}/>
      </View>
    </ScrollView>
  )
}

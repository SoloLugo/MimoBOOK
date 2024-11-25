import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Registrar() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confContraseña, setConfContraseña] = useState('')

  const Registrar = async () => {
    if (correo && contrasena) {
      if (confContraseña == contrasena){
        router.replace('/(tabs)/Perfil');
      }else{
        alert('las contraseñas no son iguales...')
      }
    } else {
      alert('Por favor, ingresa los campos requeridos');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Registrate</Text>

        <TextInput
          style={styles.input}
          placeholder="Ej: ejemplo@abc.com"
          value={correo}
          onChangeText={setCorreo}
        />

        <TextInput
          style={styles.input}
          placeholder="EJ: 1234"
          secureTextEntry
          value={contrasena}
          onChangeText={setContrasena}
        />

        <TextInput
          style={styles.input}
          placeholder="ingrese su contraseña otra vez"
          secureTextEntry
          value={confContraseña}
          onChangeText={setConfContraseña}
        />

        <TouchableOpacity style={styles.button} onPress={Registrar}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}><Link href={"/.."}>¿Ya tienes una Cuenta?</Link></Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:
    20,
    backgroundColor: '#f9f9f9',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#007bff',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
  },
});


import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Chatbot() {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="download" size={24} color="#FFA15C" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="plus" size={24} color="#FFA15C" />
        </TouchableOpacity>
      </View>

      {/* Barra de mensajes */}
      <View style={styles.messageBar}>
        <TextInput
          placeholder="Mensaje"
          placeholderTextColor="#CCCCCC"
          style={styles.textInput}
        />
        <TouchableOpacity>
          <AntDesign name="arrowright" size={24} color="#FFA15C" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  chatbotIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatbotIcon: {
    width: 100,
    height: 100,
    tintColor: '#3F3F3F', // Para dar un efecto oscuro
  },
  messageBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#555555',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    color: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#555555',
  },
});

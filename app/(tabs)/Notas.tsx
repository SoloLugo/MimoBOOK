import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Notas() {
  const perfil = async () => {
    router.replace('/(tabs)/Perfil');
  }


  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="#FFA15C" />
          </TouchableOpacity>
          <TouchableOpacity onPress={perfil}>
            <Ionicons name="person-circle" size={24} color="#FFA15C" style={styles.iconSpacing} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Grid de notas */}
      <ScrollView contentContainerStyle={styles.notesContainer}>
        {['Apuntes Móvil', 'Pensamientos', 'Poemas', 'Dibujos'].map((note, index) => (
          <TouchableOpacity key={index} style={styles.noteCard}>
            <Text style={styles.noteText}>{note}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Botón y flecha inferior */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <AntDesign name="plus" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    paddingHorizontal: 16,
    alignItems:'flex-end'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  headerTitle: {
    color: '#FFA15C',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginLeft: 16,
  },
  notesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  noteCard: {
    backgroundColor: '#5A5A5A',
    borderRadius: 10,
    width: '47%',
    height: 120,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteText: {
    color: '#FFA15C',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#FFA15C',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

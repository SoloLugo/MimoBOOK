import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function MainScreen() {
  const [activeTab, setActiveTab] = useState('Notas');
  return (
    <ScrollView style={styles.container}>
      {/* Barra superior */}
      <View style={styles.header}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Text style={styles.icon}>🔔</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.icon}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Perfil de usuario */}
      <View style={styles.profileContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <View>
          <Text style={styles.username}>Usuario #123212</Text>
          <Text style={styles.greeting}>Hola mucho gusto</Text>
        </View>
      </View>

      {/* Navegación de pestañas */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setActiveTab('Notas')}>
          <Text style={[styles.tab, activeTab === 'Notas' && styles.activeTab]}>Notas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('Tareas')}>
          <Text style={[styles.tab, activeTab === 'Tareas' && styles.activeTab]}>Tareas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('MimoChats')}>
          <Text style={[styles.tab, activeTab === 'MimoChats' && styles.activeTab]}>MimoChats</Text>
        </TouchableOpacity>
      </View>

      {/* Contenido de Notas */}
      <View style={styles.notesContainer}>
        <Text style={styles.note}>Notas Química</Text>
        <Text style={styles.note}>Caso de estudio</Text>
        <Text style={styles.note}>Dibujo Árbol</Text>
        <Text style={styles.note}>Libro</Text>
        <Text style={styles.note}>Dibujos Random</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  icon: {
    fontSize: 24,
    color: '#f29656',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#2c2c2c',
    borderRadius: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f29656',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 32,
    color: '#1c1c1c',
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f29656',
  },
  greeting: {
    fontSize: 14,
    color: '#ffffff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#2c2c2c',
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  tab: {
    fontSize: 16,
    color: '#aaaaaa',
  },
  activeTab: {
    color: '#f29656',
    borderBottomWidth: 2,
    borderBottomColor: '#f29656',
    paddingBottom: 5,
  },
  notesContainer: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
  },
  note: {
    fontSize: 16,
    color: '#1c1c1c',
    marginBottom: 10,
  },
});

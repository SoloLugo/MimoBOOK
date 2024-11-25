import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
        <Drawer.Screen
          name="Notas" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Mis Notas',
            title: 'Mis Notas',
          }}
        />
        <Drawer.Screen
          name="Perfil" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Mi Perfil',
            title: 'Mi Perfil',
          }}
        />

        <Drawer.Screen
          name="Chatbot" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Mimo Chat',
            title: 'Mimo Chat',
          }}
        />
        </Drawer>
    </GestureHandlerRootView>
  );
}

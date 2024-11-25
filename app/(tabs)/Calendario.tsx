import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';

export default function Calendario() {
  const [selectedDate, setSelectedDate] = useState(null); // Fecha seleccionada
  const [events, setEvents] = useState({
    '2024-06-10': [{ id: 1, title: 'Almuerzo Valentina' }],
    '2024-06-11': [{ id: 2, title: 'Reunión del equipo' }],
  });

  // Función para agregar eventos a una fecha
  const addEvent = (date: string | number) => {
    const newId = Object.values(events).flat().length + 1;
    const newEvent = { id: newId, title: `Nuevo Evento ${newId}` };

    setEvents((prevEvents) => ({
      ...prevEvents,
      [date]: prevEvents[date] ? [...prevEvents[date], newEvent] : [newEvent],
    }));
  };

  return (
    <View style={styles.container}>
      {/* Calendario */}
      <Calendar
        style={styles.calendar}
        theme={{
          calendarBackground: '#D9D9D9',
          textSectionTitleColor: '#000',
          dayTextColor: '#000',
          selectedDayBackgroundColor: '#FFA15C',
          selectedDayTextColor: '#FFF',
          todayTextColor: '#FFA15C',
        }}
        markedDates={{
          ...Object.keys(events).reduce((acc, date) => {
            acc[date] = { marked: true, dotColor: '#FFA15C' };
            return acc;
          }, {}),
          ...(selectedDate
            ? {
                [selectedDate]: {
                  selected: true,
                  selectedColor: '#FFA15C',
                  selectedTextColor: '#FFF',
                },
              }
            : {}),
        }}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        enableSwipeMonths={true}
      />

      {/* Eventos de la fecha seleccionada */}
      <ScrollView style={styles.eventContainer}>
        {events[selectedDate]?.length ? (
          events[selectedDate].map((event) => (
            <View key={event.id} style={styles.eventCard}>
              <Text style={styles.eventText}>{event.title}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noEventsText}>
            {selectedDate ? 'No hay eventos para esta fecha' : 'Selecciona una fecha'}
          </Text>
        )}
      </ScrollView>

      {/* Botón flotante para agregar eventos */}
      {selectedDate && (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addEvent(selectedDate)}
        >
          <AntDesign name="plus" size={24} color="#FFA15C" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    padding: 16,
  },
  calendar: {
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  eventContainer: {
    flex: 1,
    marginTop: 10,
  },
  eventCard: {
    backgroundColor: '#5C4A3F',
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
  },
  eventText: {
    color: '#FFA15C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noEventsText: {
    color: '#FFA15C',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#333333',
    padding: 16,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

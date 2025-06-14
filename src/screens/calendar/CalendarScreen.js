import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Card, Button} from 'react-native-paper';

const CalendarScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineSmall" style={styles.title}>
            📅 Calendar Integration
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            Connect with Google Calendar to sync your meetings
          </Text>
          <Button 
            mode="contained" 
            onPress={() => {/* TODO: Google Calendar integration */}}
            style={styles.button}
          >
            Connect Google Calendar
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: 20,
  },
  title: {
    color: '#6200EE',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
  },
});

export default CalendarScreen;
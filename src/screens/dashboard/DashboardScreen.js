import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Card, Button, FAB} from 'react-native-paper';

const DashboardScreen = ({navigation}) => {
  const upcomingMeetings = [
    {id: 1, title: 'Team Standup', time: '10:00 AM', duration: '30 min'},
    {id: 2, title: 'Client Call', time: '2:00 PM', duration: '1 hour'},
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <Card style={styles.welcomeCard}>
          <Card.Content>
            <Text variant="headlineSmall">Welcome back! 👋</Text>
            <Text variant="bodyMedium" style={styles.subtitle}>
              Your AI assistant is ready to help with your meetings
            </Text>
          </Card.Content>
        </Card>

        {/* Quick Actions */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Quick Actions
            </Text>
            <View style={styles.buttonGrid}>
              <Button 
                mode="contained" 
                onPress={() => navigation.navigate('Calendar')}
                style={styles.actionButton}
              >
                📅 Calendar
              </Button>
              <Button 
                mode="contained" 
                onPress={() => navigation.navigate('Meetings')}
                style={styles.actionButton}
              >
                🎤 Meetings
              </Button>
              <Button 
                mode="contained" 
                onPress={() => navigation.navigate('Chat')}
                style={styles.actionButton}
              >
                💬 AI Chat
              </Button>
            </View>
          </Card.Content>
        </Card>

        {/* Upcoming Meetings */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Today's Meetings
            </Text>
            {upcomingMeetings.map(meeting => (
              <Card key={meeting.id} style={styles.meetingCard}>
                <Card.Content>
                  <Text variant="titleSmall">{meeting.title}</Text>
                  <Text variant="bodySmall" style={styles.meetingTime}>
                    {meeting.time} • {meeting.duration}
                  </Text>
                </Card.Content>
              </Card>
            ))}
          </Card.Content>
        </Card>

        {/* Recent Summaries */}
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Recent AI Summaries
            </Text>
            <Text variant="bodySmall" style={styles.comingSoon}>
              Your meeting summaries will appear here
            </Text>
          </Card.Content>
        </Card>
      </ScrollView>

      {/* Floating Action Button */}
      <FAB
        icon="microphone"
        style={styles.fab}
        onPress={() => navigation.navigate('Meetings')}
        label="Record"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  welcomeCard: {
    margin: 16,
    marginBottom: 8,
  },
  card: {
    margin: 16,
    marginTop: 8,
  },
  sectionTitle: {
    marginBottom: 15,
    color: '#6200EE',
  },
  subtitle: {
    marginTop: 8,
    color: '#666',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    width: '48%',
    marginBottom: 10,
  },
  meetingCard: {
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
  },
  meetingTime: {
    color: '#666',
    marginTop: 4,
  },
  comingSoon: {
    color: '#999',
    fontStyle: 'italic',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#6200EE',
  },
});

export default DashboardScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

interface Meeting {
  id: number;
  title: string;
  date: string;
  time: string;
  duration: string;
  participants: number;
  status: 'upcoming' | 'completed' | 'recording';
  hasRecording?: boolean;
}

const MeetingListScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed'>('upcoming');

  const meetings: Meeting[] = [
    {
      id: 1,
      title: 'Team Standup',
      date: 'Today',
      time: '9:00 AM',
      duration: '30 min',
      participants: 5,
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Client Review Meeting',
      date: 'Today',
      time: '11:00 AM',
      duration: '1 hour',
      participants: 3,
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Project Planning Session',
      date: 'Tomorrow',
      time: '2:00 PM',
      duration: '45 min',
      participants: 8,
      status: 'upcoming',
    },
    {
      id: 4,
      title: 'Weekly Retrospective',
      date: 'Yesterday',
      time: '3:00 PM',
      duration: '1 hour',
      participants: 6,
      status: 'completed',
      hasRecording: true,
    },
    {
      id: 5,
      title: 'AI Strategy Discussion',
      date: 'Dec 10',
      time: '10:00 AM',
      duration: '2 hours',
      participants: 4,
      status: 'completed',
      hasRecording: true,
    },
  ];

  const filteredMeetings = meetings.filter(meeting => meeting.status === activeTab || 
    (activeTab === 'completed' && meeting.status === 'completed'));

  const handleJoinMeeting = (meeting: Meeting) => {
    Alert.alert(
      '🎥 Join Meeting',
      `Ready to join "${meeting.title}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Join Now', onPress: () => console.log('Joining meeting:', meeting.id) }
      ]
    );
  };

  const handleViewRecording = (meeting: Meeting) => {
    Alert.alert(
      '📹 Recording',
      `View recording for "${meeting.title}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'View Recording', onPress: () => console.log('Opening recording:', meeting.id) }
      ]
    );
  };

  const handleScheduleMeeting = () => {
    Alert.alert(
      '📅 Schedule Meeting',
      'Create a new meeting?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Schedule', onPress: () => console.log('Navigate to schedule meeting') }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Meetings</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleScheduleMeeting}>
          <Text style={styles.addButtonText}>+ New</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]}
          onPress={() => setActiveTab('upcoming')}
        >
          <Text style={[styles.tabText, activeTab === 'upcoming' && styles.activeTabText]}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'completed' && styles.activeTab]}
          onPress={() => setActiveTab('completed')}
        >
          <Text style={[styles.tabText, activeTab === 'completed' && styles.activeTabText]}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.meetingsList} showsVerticalScrollIndicator={false}>
        {filteredMeetings.map((meeting) => (
          <View key={meeting.id} style={styles.meetingCard}>
            <View style={styles.meetingHeader}>
              <Text style={styles.meetingTitle}>{meeting.title}</Text>
              <Text style={styles.meetingDate}>{meeting.date}</Text>
            </View>
            
            <View style={styles.meetingDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.detailIcon}>🕐</Text>
                <Text style={styles.detailText}>{meeting.time} • {meeting.duration}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailIcon}>👥</Text>
                <Text style={styles.detailText}>{meeting.participants} participants</Text>
              </View>
            </View>

            <View style={styles.meetingActions}>
              {meeting.status === 'upcoming' ? (
                <TouchableOpacity
                  style={styles.joinButton}
                  onPress={() => handleJoinMeeting(meeting)}
                >
                  <Text style={styles.joinButtonText}>Join Meeting</Text>
                </TouchableOpacity>
              ) : (
                <View style={styles.completedActions}>
                  {meeting.hasRecording && (
                    <TouchableOpacity
                      style={styles.recordingButton}
                      onPress={() => handleViewRecording(meeting)}
                    >
                      <Text style={styles.recordingButtonText}>📹 Recording</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity style={styles.summaryButton}>
                    <Text style={styles.summaryButtonText}>📝 Summary</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        ))}

        {filteredMeetings.length === 0 && (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>
              {activeTab === 'upcoming' ? 'No upcoming meetings' : 'No completed meetings'}
            </Text>
            <Text style={styles.emptyStateSubtext}>
              {activeTab === 'upcoming' ? 'Schedule your first meeting!' : 'Completed meetings will appear here'}
            </Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.statContainer}>
          <Text style={styles.statNumber}>{meetings.filter(m => m.status === 'upcoming').length}</Text>
          <Text style={styles.statLabel}>Upcoming</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statNumber}>{meetings.filter(m => m.hasRecording).length}</Text>
          <Text style={styles.statLabel}>Recordings</Text>
        </View>
        <View style={styles.statContainer}>
          <Text style={styles.statNumber}>2.5h</Text>
          <Text style={styles.statLabel}>Today</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#6200ea',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e5e9',
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#6200ea',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#6200ea',
    fontWeight: '600',
  },
  meetingsList: {
    flex: 1,
    padding: 20,
  },
  meetingCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  meetingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  meetingTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  meetingDate: {
    fontSize: 14,
    color: '#6200ea',
    fontWeight: '500',
  },
  meetingDetails: {
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  detailIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
  },
  meetingActions: {
    marginTop: 8,
  },
  joinButton: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  joinButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  completedActions: {
    flexDirection: 'row',
    gap: 10,
  },
  recordingButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  recordingButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  summaryButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  summaryButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  emptyState: {
    alignItems: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e1e5e9',
  },
  statContainer: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ea',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});

export default MeetingListScreen;
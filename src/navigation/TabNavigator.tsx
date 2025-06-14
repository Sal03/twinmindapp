import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

// Import your existing screens
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import CalendarScreen from '../screens/calendar/CalendarScreen';
import ChatScreen from '../screens/chat/ChatScreen';
import MeetingListScreen from '../screens/meetings/MeetingListScreen';

const Tab = createBottomTabNavigator();

// Properly typed TabIcon component
interface TabIconProps {
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ name, focused }) => (
  <Text style={[styles.tabIcon, focused && styles.tabIconFocused]}>
    {name}
  </Text>
);

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6200ea',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: '#e1e5e9',
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 65,
        },
        tabBarActiveTintColor: '#6200ea',
        tabBarInactiveTintColor: '#999',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: '🏠 Dashboard',
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon name="🏠" focused={focused} />
          ),
          headerTitle: 'TwinMind Dashboard',
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          title: '📅 Calendar',
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon name="📅" focused={focused} />
          ),
          headerTitle: 'My Calendar',
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          title: '💬 AI Chat',
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon name="💬" focused={focused} />
          ),
          headerTitle: 'TwinMind AI',
        }}
      />
      <Tab.Screen
        name="Meetings"
        component={MeetingListScreen}
        options={{
          title: '🎯 Meetings',
          tabBarIcon: ({ focused }: { focused: boolean }) => (
            <TabIcon name="🎯" focused={focused} />
          ),
          headerTitle: 'My Meetings',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    fontSize: 24,
    opacity: 0.6,
  },
  tabIconFocused: {
    opacity: 1,
    transform: [{ scale: 1.1 }],
  },
});

export default TabNavigator;
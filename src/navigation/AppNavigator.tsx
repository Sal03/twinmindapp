// AppNavigator.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Simple navigation without React Navigation to avoid module errors
const AppNavigator: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'dashboard'>('login');

  const handleLoginSuccess = () => {
    setCurrentScreen('dashboard');
  };

  const LoginComponent = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🧠 TwinMind</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLoginSuccess}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to TwinMind</Text>
        <Text style={styles.subText}>Your AI Assistant</Text>
      </View>
    </View>
  );

  const DashboardComponent = () => (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🧠 TwinMind Dashboard</Text>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => setCurrentScreen('login')}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.dashboardText}>Welcome to your Dashboard!</Text>
        <Text style={styles.subText}>Here you can manage your AI interactions</Text>
      </View>
    </View>
  );

  return currentScreen === 'login' ? <LoginComponent /> : <DashboardComponent />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#6200ea',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  dashboardText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default AppNavigator;
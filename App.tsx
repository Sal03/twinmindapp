import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  useColorScheme,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000000' : '#ffffff',
  };

  const handleTwinMindPress = () => {
    Alert.alert(
      'TwinMind Ready! 🧠',
      'Build successful! Ready to implement TwinMind features.',
      [{ text: 'Awesome!', style: 'default' }]
    );
  };

  const handleNextStep = () => {
    Alert.alert(
      'Next Steps',
      'Ready for full TwinMind implementation with:\n• Authentication\n• Audio Recording\n• Calendar Integration\n• Chat Features',
      [{ text: 'Let\'s Go!', style: 'default' }]
    );
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>📱 React Native Project</Text>
          <Text style={styles.headerSubtitle}>Build Status: ✅ Working</Text>
        </View>

        {/* TwinMind Test Section */}
        <View style={styles.twinmindContainer}>
          <View style={styles.twinmindContent}>
            <Text style={styles.twinmindEmoji}>🧠</Text>
            <Text style={styles.twinmindTitle}>TwinMind</Text>
            <Text style={styles.twinmindSubtitle}>Building Your Second Brain</Text>
            
            <TouchableOpacity 
              style={styles.testButton} 
              onPress={handleTwinMindPress}
              activeOpacity={0.8}>
              <Text style={styles.testButtonText}>✅ Test Build Success</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.nextButton} 
              onPress={handleNextStep}
              activeOpacity={0.8}>
              <Text style={styles.nextButtonText}>🚀 Ready for Full Implementation</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Features Preview */}
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>🎯 TwinMind Features Ready to Implement</Text>
          
          <View style={styles.featuresList}>
            <View style={styles.featureItem}>
              <Text style={styles.featureEmoji}>🔐</Text>
              <Text style={styles.featureText}>Google Authentication</Text>
            </View>
            
            <View style={styles.featureItem}>
              <Text style={styles.featureEmoji}>🎙️</Text>
              <Text style={styles.featureText}>Real-time Audio Recording</Text>
            </View>
            
            <View style={styles.featureItem}>
              <Text style={styles.featureEmoji}>📅</Text>
              <Text style={styles.featureText}>Calendar Integration</Text>
            </View>
            
            <View style={styles.featureItem}>
              <Text style={styles.featureEmoji}>💬</Text>
              <Text style={styles.featureText}>Interactive Chat</Text>
            </View>
            
            <View style={styles.featureItem}>
              <Text style={styles.featureEmoji}>📝</Text>
              <Text style={styles.featureText}>Meeting Summaries</Text>
            </View>
            
            <View style={styles.featureItem}>
              <Text style={styles.featureEmoji}>💾</Text>
              <Text style={styles.featureText}>Offline Storage</Text>
            </View>
          </View>
        </View>

        {/* Status Section */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Build Status</Text>
          <View style={styles.statusItem}>
            <Text style={styles.statusLabel}>✅ React Native:</Text>
            <Text style={styles.statusValue}>Working</Text>
          </View>
          <View style={styles.statusItem}>
            <Text style={styles.statusLabel}>✅ Android Build:</Text>
            <Text style={styles.statusValue}>Success</Text>
          </View>
          <View style={styles.statusItem}>
            <Text style={styles.statusLabel}>✅ Metro Server:</Text>
            <Text style={styles.statusValue}>Running</Text>
          </View>
          <View style={styles.statusItem}>
            <Text style={styles.statusLabel}>🔄 Next:</Text>
            <Text style={styles.statusValue}>TwinMind Implementation</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e5e9',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  twinmindContainer: {
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  twinmindContent: {
    backgroundColor: '#667eea',
    padding: 30,
    alignItems: 'center',
  },
  twinmindEmoji: {
    fontSize: 48,
    marginBottom: 10,
  },
  twinmindTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
    letterSpacing: 1,
  },
  twinmindSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 25,
    textAlign: 'center',
  },
  testButton: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
    minWidth: 200,
    alignItems: 'center',
  },
  testButtonText: {
    color: '#667eea',
    fontWeight: '600',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    minWidth: 200,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  featuresContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 15,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  featuresList: {
    gap: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  featureEmoji: {
    fontSize: 20,
    marginRight: 12,
  },
  featureText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  statusContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#e8f5e8',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#4caf50',
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 15,
    textAlign: 'center',
  },
  statusItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(76, 175, 80, 0.2)',
  },
  statusLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2e7d32',
  },
  statusValue: {
    fontSize: 14,
    color: '#4caf50',
    fontWeight: '500',
  },
});

export default App;
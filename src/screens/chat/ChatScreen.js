import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Card, TextInput, Button} from 'react-native-paper';

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! I\'m your TwinMind AI assistant. I can help you with meeting summaries, action items, and more.',
      isAI: true,
    },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        isAI: false,
      };
      
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          text: 'Thanks for your message! AI integration coming soon.',
          isAI: true,
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map(msg => (
          <Card 
            key={msg.id} 
            style={[
              styles.messageCard,
              msg.isAI ? styles.aiMessage : styles.userMessage
            ]}
          >
            <Card.Content>
              <Text variant="bodyMedium">{msg.text}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
      
      <View style={styles.inputContainer}>
        <TextInput
          label="Ask your AI assistant..."
          value={message}
          onChangeText={setMessage}
          mode="outlined"
          style={styles.textInput}
          onSubmitEditing={sendMessage}
        />
        <Button 
          mode="contained" 
          onPress={sendMessage}
          style={styles.sendButton}
        >
          Send
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageCard: {
    marginBottom: 8,
  },
  aiMessage: {
    marginRight: 50,
    backgroundColor: '#e3f2fd',
  },
  userMessage: {
    marginLeft: 50,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    marginRight: 8,
  },
  sendButton: {
    alignSelf: 'flex-end',
  },
});

export default ChatScreen;
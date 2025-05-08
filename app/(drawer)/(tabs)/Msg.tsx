// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';

// function Chatbot() {
//   const [msg, setMsg] = useState('');
//   const [messages, setMessages] = useState<any>([]);

//   const chatGptUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

//   // integrate chatGpt open ai
//   const sendMsgToChatGpt = async () => {
//     setMsg('');
//   };

//   // Render a chat bubble based on the message sender
//   const renderMessage = ({ item }: any) => {
//     const isUser = item.sender === 'user';
//     return (
//       <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.botMessage]}>
//         <Text style={[styles.messageText, isUser ? styles.userText : styles.botText]}>
//           {item.text}
//         </Text>
//       </View>
//     );
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
//       <FlatList
//         data={messages}
//         renderItem={renderMessage}
//         keyExtractor={(item) => item.id}
//         inverted
//         contentContainerStyle={styles.messagesList}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Type a message..."
//           placeholderTextColor="#aaa"
//           value={msg}
//           onChangeText={setMsg}
//         />
//         <TouchableOpacity onPress={sendMsgToChatGpt} style={styles.sendButton}>
//           <Text style={styles.sendButtonText}>Send</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   );
// }

// export default Chatbot;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   messagesList: {
//     paddingHorizontal: 10,
//     paddingBottom: 10,
//   },
//   messageContainer: {
//     maxWidth: '75%',
//     padding: 10,
//     borderRadius: 15,
//     marginVertical: 5,
//   },
//   userMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#0084ff',
//     borderTopRightRadius: 0,
//   },
//   botMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#e0e0e0',
//     borderTopLeftRadius: 0,
//   },
//   messageText: {
//     fontSize: 16,
//   },
//   userText: {
//     color: '#fff',
//   },
//   botText: {
//     color: '#333',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     paddingBottom: 140,
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     borderTopWidth: 1,
//     borderTopColor: '#e0e0e0',
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     color: '#333',
//     fontSize: 16,
//   },
//   sendButton: {
//     marginLeft: 10,
//     backgroundColor: '#0084ff',
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 20,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });








import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => console.log('Back')}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Chat with Restaurant</Text>
      </View>

      {/* Messages List */}
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        <View style={styles.messageBubbleLeft}>
          <Text style={styles.messageText}>Hello, how can I help you?</Text>
        </View>
        <View style={styles.messageBubbleRight}>
          <Text style={styles.messageText}>I am looking for the menu.</Text>
        </View>
      </ScrollView>

      {/* Input Field & Send Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 60,
    backgroundColor: '#47556d',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 5,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1, // Centering the title
  },
  messagesContainer: {
    padding: 10,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messageBubbleLeft: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    maxWidth: '80%',
    
  },
  messageBubbleRight: {
    backgroundColor: '#627ae4',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    alignSelf: 'flex-end',
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
    paddingBottom: 120,
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 15,
    fontSize: 16,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#47556d',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChatScreen;

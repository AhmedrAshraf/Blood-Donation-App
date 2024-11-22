import { router } from 'expo-router';
import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { db } from '~/utils/firebase';

export default function BloodDonateScreen() {
  const [Timer, setTimer] = useState(10);
  const [count, setCount] = useState(25);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'adminOnline', 'PJeGZBPZVCoqcBJslSBL'), (doc) => {
      setOnline(doc.data()?.isOnline);
    });
    return () => unsub();
  }, []);

  const handleTap = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      // setTimer((prevCount) => prevCount - 1);
    }, 1000);
  }, [Timer]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Game</Text>
        <Text style={{ fontSize: 30, color: 'white' }}>{Timer}</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 50, fontWeight: '600', marginTop: 50 }}>IsAdmin</Text>
        <View
          style={{
            width: 20,
            height: 20,
            borderRadius: 100,
            backgroundColor: online ? 'green' : 'gray',
          }}></View>
      </View>

      <Text style={{ fontSize: 50, fontWeight: '600', marginTop: 50 }}>{count}</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          marginTop: 50,
        }}>
        <TouchableOpacity style={styles.donateButton} onPress={handleTap}>
          <Text style={styles.buttonText}>Tap</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.donateButton} onPress={handleTap}>
          <Text style={styles.buttonText}>tap</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF5F5',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#D32F2F',
    paddingTop: 60,
    paddingBottom: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subHeaderText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 5,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C62828',
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#C62828',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#C62828',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#424242',
    backgroundColor: '#FFF8F8',
  },
  donateButton: {
    backgroundColor: '#E53935',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginVertical: 10,
  },
});

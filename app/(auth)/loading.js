import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const Loading = () => {

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const user = await AsyncStorage.getItem('info');
    console.log(user);
    
    if (user !== null) {
      console.log('if');
      
      setUser(JSON.parse(user));
      // router.push('(Drawer)');
      router.push('(Drawer)');
    } else {
      console.log('else');
      router.push('(auth)/sign-in');
    }
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text style={{ color: 'gray' }}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;

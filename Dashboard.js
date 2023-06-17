import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text>Welcome to your dashboard!</Text>
      {/* Add your dashboard content here */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

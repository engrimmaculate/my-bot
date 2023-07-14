import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
export default function App() {
  return (
    <View style={styles.container}>
    {/* importing the CoinItem in HomeScreen components */}
    <HomeScreen />
     <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop:50,
  },
});

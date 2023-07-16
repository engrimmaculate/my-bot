import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CoinDetailedScreen from './src/screens/CoinDetailedScreen';
export default function App() {
  return (
    <View style={styles.container}>
    {/* importing the CoinItem in HomeScreen components */}
    {/* <HomeScreen /> */}
    <CoinDetailedScreen />
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

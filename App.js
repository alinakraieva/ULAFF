import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AlertWindow from './app/components/AlertWindow';
import Rectangle from './app/components/Rectangle';
import StopWatch from './app/components/StopWatch';

import TimeOut from './app/components/TimeOut';
import NewGameScreen from './app/screens/NewGameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Rectangle/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {SampleTextInput} from './SampleTextInput.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Giriş/Kayıt Formu</Text>
      <SampleTextInput/>
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
});

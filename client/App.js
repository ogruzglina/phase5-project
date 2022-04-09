import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Home from './screens/Home';

export default function App() {

  return (
    <View>
      <Home />
    </View>
  );
}
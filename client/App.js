import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import BottomTabs from './components/BottomTabs'

export default function App() {

  return <BottomTabs />
  // <Navigation /> ;
}
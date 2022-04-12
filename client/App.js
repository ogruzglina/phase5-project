import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import axios from 'axios'

export default function App() {
  const [ currentUser, setCurrentUser ] = useState(null);

  const tempUserId = 9;
    useEffect(async () => {
        try {
            const res = await axios.get(`http://localhost:3000/users/${tempUserId}`);
            const user = await res.data;
            console.log('user', user);
            
            setCurrentUser(user);
        } catch (e) {
            console.log(e);
        }
    }, []);

  return <Navigation currentUser = { currentUser } /> ;//<BottomTabs /> 
}

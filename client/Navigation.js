import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import ChargerDetails from './screens/ChargerDetails'

export default function Navigation() {
  const Stack = createNativeStackNavigator();
    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" >
        <Stack.Screen name = "Home" component = { Home } />
        <Stack.Screen name = "ChargerDetails" component = { ChargerDetails } options={{ title: 'Charger Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
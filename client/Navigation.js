import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChargerDetails from './screens/ChargerDetails'
import HomeBottomTabs from './components/HomeBottomTabs';
import ChargerBottomTabs from './components/ChargerBottomTabs';

export default function Navigation() {
  const Stack = createNativeStackNavigator();
    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "HomeBottomTabs" >
        <Stack.Screen name = "HomeBottomTabs" component = { HomeBottomTabs } options={{ headerShown: false }}/>
        <Stack.Screen name = "ChargerDetails" component = { ChargerBottomTabs } options={{ title: 'Charger Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
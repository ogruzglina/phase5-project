import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Direction from '../screens/Direction'
// import ChargerDetails from '../screens/ChargerDetails'
import ChargerReviews from '../screens/ChargerReviews'

const Tab = createBottomTabNavigator();

export default function HomeBottomTabs() {
  return (
   // <NavigationContainer>
      <Tab.Navigator initialRouteName = "Home">
        <Tab.Screen name = "Home" component = { Home } />
        <Tab.Screen name = "Profile" component = { Profile } />
        <Tab.Screen name = "ChargerReviews" component = { ChargerReviews } options={{ title: 'Charger Reviews' }} />
        <Tab.Screen name = "Direction" component = { Direction } />
        {/* <Tab.Screen name = "ChargerDetails" component = { ChargerDetails } options={{ title: 'Charger Details' }} /> */}
      </Tab.Navigator>
   // </NavigationContainer>
  )
}
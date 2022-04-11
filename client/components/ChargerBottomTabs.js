import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../screens/Home'
import ChargerDetails from '../screens/ChargerDetails'
import Profile from '../screens/Profile'
import Direction from '../screens/Direction'
import ChargerReviews from '../screens/ChargerReviews'

const Tab = createBottomTabNavigator();

export default function ChargerBottomTabs() {
  return (
      <Tab.Navigator initialRouteName = "ChargerDetails">
        <Tab.Screen name = "ChargerDetails" component = { ChargerDetails } options={{ headerShown: false, tabBarButton: (props) => null }} />
        <Tab.Screen name = "Home" component = { Home } />
        <Tab.Screen name = "Direction" component = { Direction } />
        <Tab.Screen name = "ChargerReviews" component = { ChargerReviews } options={{ title: 'Charger Reviews' }} />
        <Tab.Screen name = "Profile" component = { Profile } />
      </Tab.Navigator>
  )
}
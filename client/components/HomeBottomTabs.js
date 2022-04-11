import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../screens/Home'
import Profile from '../screens/Profile'

const Tab = createBottomTabNavigator();

export default function HomeBottomTabs() {
  return (
      <Tab.Navigator initialRouteName = "Home">
        <Tab.Screen name = "Home" component = { Home } />
        <Tab.Screen name = "Profile" component = { Profile } />
      </Tab.Navigator>
  )
}
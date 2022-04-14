import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import ChargerDetails from '../screens/ChargerDetails'
import Profile from '../screens/Profile'
import Direction from '../screens/Direction'
import ChargerReviews from '../screens/ChargerReviews'

const Tab = createBottomTabNavigator();

export default function ChargerBottomTabs({ route }) {
  const charger = route.params.params.charger;
  console.log('chabtab route.params', route.params)
  
  return (
      <Tab.Navigator initialRouteName = "ChargerDetails" screenOptions = {{headerShown: false}}>
        <Tab.Screen name = "ChargerDetails" component = { ChargerDetails } />
        <Tab.Screen name = "Direction" component = { Direction } />
        <Tab.Screen name = "ChargerReviews" component = { ChargerReviews } initialParams={{ charger: charger }}/>
        {/* <Tab.Screen name = "Profile" component = { Profile } /> */}
      </Tab.Navigator>
  )
} 
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import AddChargerForm from '../screens/AddChargerForm';

const Tab = createBottomTabNavigator();

export default function HomeBottomTabs({ currentUser }) {
  console.log('homebtCurrUser ', currentUser);

  return (
      <Tab.Navigator initialRouteName = "Home">
        <Tab.Screen 
          name = "Home" 
          component = { Home } 
          //children = { () => <Home currentUser = { currentUser }/>}
        />
        <Tab.Screen 
          name = "Profile" 
          children = { () => <Profile currentUser = { currentUser }/>}
          // component = { Profile } 
          
        />
        <Tab.Screen 
          name = "AddChargerForm" 
          children = { () => <AddChargerForm currentUserId = { currentUser.id }/>}

        />
      </Tab.Navigator>
  )
}
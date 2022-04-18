//import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeBottomTabs from './HomeBottomTabs';
import ChargerBottomTabs from './ChargerBottomTabs';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

export default function Navigation({ currentUser, currentUserChargers, setCurrentUserChargers, setIsAddNewCharger }) {
  const Stack = createNativeStackNavigator();
  
  function getHeaderTitle(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'ChargerDetails';
  
    switch (routeName) {
      case 'ChargerDetails':
        return 'Charger Details';
      case 'Profile':
        return 'My profile';
      case 'ChargerReviews':
        return 'Charger Reviews';
      case 'Direction':
        return 'Direction';
    }
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "HomeBottomTabs" >
        <Stack.Screen 
          name = "Login" 
          component = { Login }
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name = "Signup" 
          component = { Signup }
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name = "HomeBottomTabs" 
          component = { HomeBottomTabs }
          initialParams={{ currentUser }}
          // currentUserChargers, setCurrentUserChargers, setIsAddNewCharger
          //children = { () => <HomeBottomTabs currentUser = { currentUser } allChargers = { chargers } />}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name = "ChargerDetails" 
          component = { ChargerBottomTabs } 
          initialParams={{ currentUser }}
          options={ ({ route }) => ({
            headerTitle: getHeaderTitle(route),
            headerBackTitle: 'Map',
            title: 'Charger Details'
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 
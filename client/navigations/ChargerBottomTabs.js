import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import ChargerDetails from '../screens/ChargerDetails';
import Direction from '../screens/Direction';
import ChargerReviews from '../screens/ChargerReviews';
import Login from '../screens/Login';


const Tab = createBottomTabNavigator();

export default function ChargerBottomTabs({ route, navigation }) {
  const charger = route.params.params.charger;
  const currentUserId = route.params.currentUser.id;

  return (
      <Tab.Navigator 
        initialRouteName = "ChargerDetails" 
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch(route.name) {
            case "ChargerDetails": 
                iconName = 'charging-station';
                break;
            case "Direction": 
                iconName = 'directions';
                break;
            case "ChargerReviews": 
                iconName = 'thumbs-up';
                break;
            case "Logout": 
                iconName = 'running';
                break;
          }
          color = focused ? 'gold' : '#ffb';
          return <FontAwesome5 name = { iconName } size = { size } color = { color } />;
        },
        tabBarActiveTintColor: 'gold',
        tabBarInactiveTintColor: '#ffb',
        headerShown: false
      })}
      >
        <Tab.Screen name = "ChargerDetails" component = { ChargerDetails } />
        <Tab.Screen name = "Direction" component = { Direction } />
        <Tab.Screen 
          name = "ChargerReviews" 
          component = { ChargerReviews } 
          initialParams={{ charger: charger, currentUserId: currentUserId }} 
        />
        <Tab.Screen 
        name = "Logout" 
        component = { Login }
        options={{ tabBarStyle: { display: "none" } }}
      />
      </Tab.Navigator>
  )
} 
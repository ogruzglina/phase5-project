import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from '@expo/vector-icons/Ionicons';
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
        //screenOptions = {{headerShown: false}}
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
          color = focused ? 'blue' : 'grey';
          return <FontAwesome5 name = { iconName } size = { size } color = { color } />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name = "ChargerDetails" component = { ChargerDetails } options = {{ headerShown: false }}/>
        <Tab.Screen name = "Direction" component = { Direction } options = {{ headerShown: false }}/>
        <Tab.Screen 
          name = "ChargerReviews" 
          component = { ChargerReviews } 
          initialParams={{ charger: charger, currentUserId: currentUserId }} 
          options = {{ headerShown: false }}
        />
        <Tab.Screen 
        name = "Logout" 
        component = { Login }
        options={{
          tabBarStyle: { display: "none" },
       }}
      />
      </Tab.Navigator>
  )
} 
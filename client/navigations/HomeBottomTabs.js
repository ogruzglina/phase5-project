import React, {useState, useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import AddChargerForm from '../screens/AddChargerForm';
import Login from '../screens/Login';
import axios from 'axios';

const Tab = createBottomTabNavigator();

export default function HomeBottomTabs({ route, navigation }) {
  const [ currentUserChargers, setCurrentUserChargers ] = useState(null);
  const [ chargers, setChargers ] = useState(null);
  const currentUser = route.params.currentUser;
  
  useEffect(async () => {
    try {
      const res = await axios.get(`http://localhost:3000/uchargers/${currentUser.id}`);
      const userChargers = await res.data;

      setCurrentUserChargers(userChargers);
    } catch (e) {
      console.log(e);
    }
  }, []);
 
  useEffect(async () => {
    try {
      const res = await axios.get('http://localhost:3000/chargers');
      const chargersList = await res.data;

      setChargers(chargersList);
    } catch (e) {
        console.log(e);
    }
  }, []);

  if ( chargers === null) return null;
  console.log('homebtn chargers ', chargers.length);
  return (
    <Tab.Navigator 
      initialRouteName = "Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch(route.name) {
            case "Home": 
              iconName = 'map-marked-alt';
              break;
            case "Profile": 
                iconName = 'user-alt';
                break;
            case "AddChargerForm": 
                iconName = 'charging-station';
                break;
            case "Logout": 
                iconName = 'running';
                break;
          }
          color = focused ? '#FCCF03' : '#ffb';
          return <FontAwesome5 name = { iconName } size = { size } color = { color } />;
        },
        tabBarActiveTintColor: '#FCCF03',
        tabBarInactiveTintColor: '#ffb',
      })}
    >
      <Tab.Screen 
        name = "Home" 
        children = { () => <Home navigation={navigation} chargers = { chargers } />}
      />
      <Tab.Screen 
        name = "Profile" 
        children = { () => <Profile currentUser = { currentUser } currentUserChargers = { currentUserChargers } />}
      />
      <Tab.Screen 
        name = "AddChargerForm" 
        children = { () => <AddChargerForm 
          currentUserId = { currentUser.id } 
          setCurrentUserChargers = { setCurrentUserChargers }
          setChargers = { setChargers }
        />}
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
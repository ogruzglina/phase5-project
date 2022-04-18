import React, {useState, useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import AddChargerForm from '../screens/AddChargerForm';
import axios from 'axios';

const Tab = createBottomTabNavigator();

export default function HomeBottomTabs({ route }) {
  const [ currentUserChargers, setCurrentUserChargers ] = useState(null);
  // const [ isAddNewCharger, setIsAddNewCharger ] = useState(false);
  const [ chargers, setChargers ] = useState(null);
  const currentUser = route.params.currentUser;
  
  useEffect(async () => {
    try {
      const res = await axios.get(`http://localhost:3000/uchargers/${currentUser.id}`);
      const userChargers = await res.data;

      console.log('homebt useefff - ', userChargers.length)

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
    <Tab.Navigator initialRouteName = "Home">
      <Tab.Screen 
        name = "Home" 
        children = { () => <Home chargers = { chargers }/>}
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
          setIsAddNewCharger = { setIsAddNewCharger }
          setChargers = { setChargers }
        />}
      />
    </Tab.Navigator>
  )
}
import React, { useEffect, useState } from 'react';
import Navigation from './navigations/Navigation';
import axios from 'axios'

export default function App() {
  const [ currentUser, setCurrentUser ] = useState(null);
  // const [ currentUserChargers, setCurrentUserChargers ] = useState(null);
  // const [ isAddNewCharger, setIsAddNewCharger ] = useState(false);

  const tempUserId = 4;
  //console.log('is add - ', isAddNewCharger)

  useEffect(async () => {
    try {
      const res = await axios.get(`http://localhost:3000/users/${tempUserId}`);
      const user = await res.data;

      // const userChargers = user.map( charger => { return ({
      //   address: charger.address, 
      //   charger_type: charger.charger_type, 
      //   cost: charger.cost, 
      //   fee: charger.fee, 
      //   user_id: charger.user_id,
      //   hours: charger.hours,
      //   id: charger.id,
      //   latitude: charger.latitude,
      //   longitude: charger.longitude,
      //   status: charger.status
      // });
      // });

      // console.log('is add in useeff - ', isAddNewCharger)
      // console.log('charg in useeff - ', userChargers)

      setCurrentUser(user[0].user);
      //setCurrentUserChargers(userChargers);
    } catch (e) {
      console.log(e);
    }
  }, []);//[isAddNewCharger]);

  if (currentUser === null ) return null;//|| currentUserChargers === null) return null;
  return <Navigation 
    currentUser = { currentUser } 
    // currentUserChargers = { currentUserChargers } 
    // setCurrentUserChargers = { setCurrentUserChargers }
    // setIsAddNewCharger = { setIsAddNewCharger }
  />;
}

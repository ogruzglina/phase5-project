import { View, Text, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ChargerDetails({ navigation, route }) {
  const { charger_type, address, cost, fee, hours, status, id } = route.params.charger;
  const [ isAvailable, setIsAvailable ] = useState(status);
  let btnName, color, chargerStatus;

  if (isAvailable === true) {
    chargerStatus = "available now";
    btnName = "Start charging";
    color = "green";
  } else {
    chargerStatus = "not available now";
    btnName = "Stop charging";
    color = "red";
  }
  console.log('chargerRoute', route.params);

  useEffect(async () => {
    axios.put(`http://localhost:3000/chargers/${id}`, { status: isAvailable })
      .then( updatedCharger => { 
        console.log('updated charger data - ', updatedCharger.data)
        //onAddCharger(res.data) 
      })
      .catch( function(error) {
        console.log('ERROR', error)
        if (error.request) {
            console.log('error request - ', error.request);
        }
        if (error.response) {
            console.log('error response - ', error.response);
        }
      });
  }, [isAvailable]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{ charger_type }</Text>
      <Text>{ address }</Text>
      <Text>Cherger is available - { hours }</Text>
      <Text>Cost per hour - $ {cost}</Text>
      <Text>Fee - $ { fee }</Text>
      <Text>Charger station is { chargerStatus }</Text>

      <View style = {{ marginTop: '10%' }}>
        <Button  
            title = { btnName }
            color = { color }
            onPress = { () => setIsAvailable(!isAvailable) } 
        />
      </View>
    </View>
  )
}
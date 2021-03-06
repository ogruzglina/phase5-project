import { View, TextInput, Button, StyleSheet, Dimensions, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const width = Dimensions.get('window').width;

export default function ChargerDetails({ navigation, route }) {
  const { charger_type, address, cost, fee, hours, status, id } = route.params.charger;
  const [ isAvailable, setIsAvailable ] = useState(status);
  let btnName, color, chargerStatus;

  if (isAvailable) {
    chargerStatus = "available now";
    btnName = "Start charging";
    color = "#06FF00";
  } else {
    chargerStatus = "not available now";
    btnName = "Stop charging";
    color = "red";
  }

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
      <TextInput style={ styles.input }>{ charger_type }</TextInput>
      <TextInput style={ styles.input }>{ address }</TextInput>
      <TextInput style={ styles.input }>Cherger is available - { hours }</TextInput>
      <TextInput style={ styles.input }>Cost per hour - $ {cost}</TextInput>
      <TextInput style={ styles.input }>Fee - $ { fee }</TextInput>
      <TextInput style={ styles.input }>Charger station is { chargerStatus }</TextInput>

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

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  input: {
    backgroundColor: '#1F1B2F',
    borderWidth: 1.5,
    borderColor: '#20BE94',
    color: '#F9FCE0',
    borderRadius: 22,
    width: width/1.2,
    marginVertical: 6,
    padding: 8,
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    shadowColor: "#21C5BF",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.63,
    shadowRadius: 5,
  },
  button: (isValid) => ({
    borderWidth: 1,
    borderColor: '#ff0',
    backgroundColor: isValid ? '#ff0' : '#ffb',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 30,
    margin: 10,
  }),
  container: {
    flex: 1,
    width: '100%',
    marginTop: 50,
    justifyContent: 'center'
  }
});
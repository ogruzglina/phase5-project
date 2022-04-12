import { View, Text } from 'react-native'
import React from 'react'

export default function ChargerDetails({ navigation, route }) {
  const { charger_type, address, cost, fee, hours, status } = route.params.charger;
  const chargerStatus = status ? "available" : "not availible";

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{charger_type}</Text>
      <Text>{address}</Text>
      <Text>Cherger is available - {hours}</Text>
      <Text>Cost per hour - $ {cost}</Text>
      <Text>Fee - $ {fee}</Text>
      <Text>Charger station is {chargerStatus}</Text>
    </View>
  )
}
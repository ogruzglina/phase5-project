import { View, Text } from 'react-native'
import React from 'react'

export default function ChargerDetails({ navigation, route }) {
  console.log('chargerRoute', route.params.charger)
  const { charger_type, address, cost, fee, hours, status } = route.params.charger;
  console.log('chargerRoute', charger_type)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{charger_type}</Text>
      <Text>{address}</Text>
      <Text>{hours}</Text>
      <Text>{cost}</Text>
      <Text>{fee}</Text>
      <Text>{status}</Text>
    </View>
  )
}
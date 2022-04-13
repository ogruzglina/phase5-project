import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Profile({ currentUser, navigation }) {
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.tinyLogo}
        source={{ url: currentUser.avatar }}
      />
      <Text>{ currentUser.username }</Text>
      <Text>{ currentUser.email }</Text>
      <Text>{ currentUser.charger_id ? "have a charger " : null }</Text>
      <Button 
        // style = {{ marginTop: 250 }} 
        title="Add a Charger"
        color = 'green'
        onPress = { () => navigation.navigate('AddChargerForm')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
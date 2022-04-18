import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Profile({ currentUser, currentUserChargers, navigation }) {
  console.log('profile user , chargers', currentUserChargers.length)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.tinyLogo}
        source={{ url: currentUser.avatar }}
      />
      <Text>{ currentUser.username }</Text>
      <Text>{ currentUser.email }</Text>
      
      <View style = {{marginTop: 10}}>
        { currentUserChargers.map( charger => 
          <Text key = {charger.id}>{ charger.charger_type }</Text> 
        )}
      </View>

      {/* <Button 
        title="Add a Charger"
        color = 'green'
        onPress = { () => navigation.navigate('AddChargerForm')} 
      /> */}
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
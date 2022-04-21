import { View, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function Profile({ currentUser, currentUserChargers, navigation }) {
  console.log('profile user , chargers', currentUserChargers.length)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* style = { styles.infoContainer }> */}
      {/* style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
      <Image
        style = { styles.tinyLogo }
        source={{ url: currentUser.avatar }}
      />
      <TextInput style = { styles.input }>{ currentUser.username }</TextInput>
      <TextInput style = { styles.input }>{ currentUser.email }</TextInput>
      { 
        currentUserChargers.length !== 0 
          ? <Text style = {{textAlign: 'center', fontSize: 18, color: 'gold', marginTop: 10}}>Chargers:</Text> 
          : null
      }
      <View >
        { currentUserChargers.map( charger => 
          <TextInput key = { charger.id } style = { styles.input }>{ charger.charger_type }</TextInput> 
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
  tinyLogo: {
    width: 70,
    height: 70,
    borderRadius: 20,
    justifyContent: 'center', 
    marginBottom: 10,
  },
    input: {
      borderWidth: 2,
      backgroundColor: '#1F1B2F',
      borderColor: '#20BE94',
      borderRadius: 20,
      margin: 6,
      padding: 8,
      textAlign: 'center',
      fontSize: 18,
      color: '#F9FCE0',
      fontWeight: 'bold',
      width: width/1.2,
      shadowColor: "#21C5BF",
      shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.63,
    shadowRadius: 5,
    },
});
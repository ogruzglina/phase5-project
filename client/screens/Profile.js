import { View, Text, Image, StyleSheet, Button, Dimensions } from 'react-native'
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
      <Text style = { styles.input }>{ currentUser.username }</Text>
      <Text style = { styles.input }>{ currentUser.email }</Text>
      
      <View style = {{marginTop: 10}}>
        { currentUserChargers.map( charger => 
          <Text key = { charger.id } style = { styles.input }>{ charger.charger_type }</Text> 
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
  // container: {
  //   paddingTop: 50,
  // },
  tinyLogo: {
    width: 50,
    height: 50,
    justifyContent: 'center'
  },
  // logo: {
  //   width: 66,
  //   height: 58,
  // },
    // wrapper: {
    //   marginTop: 80,
    // },
    input: {
      borderWidth: 1,
      borderColor: '#70F1E3',
      //backgroundColor: '#1F1B2F',
      borderRadius: 24,
      margin: 10,
      padding: 10,
      textAlign: 'center',
      fontSize: 18,
      color: 'white',
      width: width/1.2,
    },
    // button: (isValid) => ({
    //   borderWidth: 1,
    //   borderColor: '#ff0',
    //   backgroundColor: isValid ? '#ff0' : '#ffb',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   height: 45,
    //   borderRadius: 30,
    //   margin: 10,
    // }),
});
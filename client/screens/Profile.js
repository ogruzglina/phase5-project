import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Profile({ navigation, currentUser }) {
  console.log('profileCurrUser ', currentUser)
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.tinyLogo}
        source={{ url: currentUser.avatar }}
      />
      <Text>{ currentUser.username }</Text>
      <Text>{ currentUser.email }</Text>
      <Text>{ currentUser.charger_id ? "have a charger " : null }</Text>
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
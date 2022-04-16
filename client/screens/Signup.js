import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LogoBY from "../assets/LogoBY.png"
import SignupForm from '../components/SignupForm';

export default function Signup({ navigation }) {
  return (
    <View style = { styles.container }>
      <View style = { styles.logoContainer}>
            <Image source = {LogoBY} style = {{ height: 150, width: 150 }}/>
      </View>
      <SignupForm navigation = { navigation }/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,

    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    }
});
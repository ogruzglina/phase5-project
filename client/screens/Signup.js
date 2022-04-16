import { View, StyleSheet } from 'react-native'
import React from 'react'
import SignupForm from '../components/SignupForm';
import Logo from '../components/Logo';

export default function Signup({ navigation }) {
  return (
    <View style = { styles.container }>
      <Logo />
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
});
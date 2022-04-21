import { View, StyleSheet } from 'react-native'
import React from 'react'
import SignupForm from '../components/SignupForm';
import Logo from '../components/Logo';

export default function Signup({ navigation }) {
  return (
    <View style = { styles.container }>
      <Logo isLogin = { false }/>
      <SignupForm navigation = { navigation }/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#1F1B2F', //#37314B
    paddingTop: 50,
    paddingHorizontal: 12,
  },
});
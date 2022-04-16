import { View, StyleSheet } from 'react-native'
import React from 'react'
import LoginForm from '../components/LoginForm';
import Logo from '../components/Logo';

export default function Login({ navigation }) {

  return (
    <View style = { styles.container }>
      <Logo />
      <LoginForm navigation = { navigation }/>
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
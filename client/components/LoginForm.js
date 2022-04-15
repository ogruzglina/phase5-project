import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

export default function LoginForm() {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string().required().min(6, 'Your password has to have at least 6 characteres')
  });

  return (
    <View style = { styles.wrapper} >
      <Formik
        initialValues = {{ email: '', password: ''}}
        onSubmit = { values => {console.log('formik values ',values) }}
        validationSchema = { LoginFormSchema }
        validateOnMount = { true }
      >
        { ({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <TextInput 
              placeholder = 'Username or Email' 
              autoCapitalize = 'none'
              autoFocus = { true }
              autoCorrect = { false }
              keyboardType = 'email-address'
              textContentType = 'emailAddress'
              style = { styles.input } 
              onChangeText = { handleChange ('email') }
              onBlur = { handleBlur('email') }
              value = { values.email } 
            />
            <TextInput
              placeholder = 'Password' 
              autoCapitalize = 'none'
              autoCorrect = { false }
              secureTextEntry = { true }
              textContentType = 'password'
              style = { styles.input } 
              onChangeText = { handleChange ('password') }
              onBlur = { handleBlur('password') }
              value = { values.password } 
            />
            <View style = {{ alignItems: 'flex-end', marginBottom: 30, marginRight: 13}}>
              <Text style = {{color: 'blue'}}>Forgot password?</Text>
            </View>

            <Pressable style = { styles.button } onPress = { handleSubmit }>
              <Text style = {{ fontSize: 18 }}>Log In</Text>
            </Pressable>

            <View style = { styles.signupContainer }>
              <Text>Don't have an account? </Text>
              <TouchableOpacity style = {{ color: 'blue' }}>
                <Text style = {{ color: 'blue' }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 30,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    borderWidth: 1,
    borderColor: 'yellow',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 30,
    margin: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,
    justifyContent: 'center'
  }
});
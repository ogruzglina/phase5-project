import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

export default function LoginForm({ navigation }) {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string().required().min(6, 'Your password has to have at least 6 characteres')
  });

  return (
    <View style = { styles.wrapper} >
      <Formik
        initialValues = {{ email: '', password: ''}}
        onSubmit = { (values, { resetForm }) => {
          console.log('formik values ',values);
          // user jwt or db validation 
          navigation.navigate('HomeBottomTabs');
          resetForm();
        }}
        validationSchema = { LoginFormSchema }
        validateOnMount = { true }
      >
        { ({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <TextInput 
              placeholder = 'Email' 
              placeholderTextColor="#999"
              autoCapitalize = 'none'
              autoFocus = { true }
              autoCorrect = { false }
              keyboardType = 'email-address'
              textContentType = 'emailAddress'
              style = {[
                styles.input, 
                { 
                  borderColor: 
                    values.email.length < 1 || Validator.validate(values.email) 
                      ? '#FCCF03' 
                      : 'red',
                  shadowColor: values.email.length < 1 || Validator.validate(values.email) ? "#ffb" : 'red' 
                }
              ]} 
              onChangeText = { handleChange ('email') }
              onBlur = { handleBlur('email') }
              value = { values.email } 
            />
            <TextInput
              placeholder = 'Password' 
              placeholderTextColor="#999"
              autoCapitalize = 'none'
              autoCorrect = { false }
              secureTextEntry = { true }
              textContentType = 'password'
              style = {[
                styles.input, 
                { borderColor: 
                    1 > values.password.length || values.password.length >= 6 
                      ? '#FCCF03' 
                      : 'red',
                  shadowColor: 1 > values.password.length || values.password.length >= 6 ? "#ffb" : 'red'
                }
              ]} 
              onChangeText = { handleChange ('password') }
              onBlur = { handleBlur('password') }
              value = { values.password } 
            />

            <View style = {{ alignItems: 'flex-end', marginBottom: 30, marginRight: 13}}>
              <Text style = {{color: '#20BE94', fontSize: 15}}>Forgot password?</Text>
            </View>

            <Pressable 
              style = { styles.button(isValid) } 
              onPress = { handleSubmit }
              disabled = { !isValid } 
            >
              <Text style = {{ fontSize: 18 }}>Log In</Text>
            </Pressable>

            <View style = { styles.signupContainer }>
              <Text style = {{ color: '#F9FCE0', fontSize: 15 }}>Don't have an account? </Text>
              <TouchableOpacity onPress = {() => navigation.navigate('Signup')}>
                <Text style = {{ color: '#20BE94', fontSize: 15 }}>Sign Up</Text>
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
    color: '#F9FCE0',
    backgroundColor: '#37314B',
    borderRadius: 30,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.83,
    shadowRadius: 6,
  },
  button: (isValid) => ({
    borderWidth: 1,
    backgroundColor: isValid ? '#FCCF03' : '#ffb',
    borderColor: '#FCCF03',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 30,
    margin: 10,
    shadowColor: "#37314B",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.83,
    shadowRadius: 6,
  }),
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,
    justifyContent: 'center',
    
  }
});
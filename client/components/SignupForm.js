import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';
import axios from 'axios'

export default function SignupForm({ navigation }) {
  const SignupFormSchema = Yup.object().shape({
    username: Yup.string().required().min(3, 'A username is required'),
    email: Yup.string().email().required('An email is required'),
    password: Yup.string().required().min(6, 'Your password has to have at least 6 characteres'),
    passwordConfirmation: Yup.string().required().min(6, 'Your password has to have at least 6 characteres'),
  });

  return (
    <View style = { styles.wrapper} >
      <Formik
        initialValues = {{ username: '', email: '', password: '', passwordConfirmation: '' }}
        onSubmit = { (values, { resetForm }) => {
            console.log('formik values ',values);
            let newUser = {
                username: values.username,
                email: values.email,
                password: values.password,
                password_confirmation: values.passwordConfirmation
            }
            
            axios.post(`http://localhost:3000/users`, newUser)
                .then(res => {
                    console.log('user post res', res.data);
                    navigation.navigate('Login');
                })
                .catch(function(error){
                    console.log('ERROR ', error);
                    if (error.request) {
                        console.log(error.request);
                    }
                    if (error.response) {
                        console.log(error.response);
                    }
                }); 
            resetForm();
        }}
        validationSchema = { SignupFormSchema }
        validateOnMount = { true }
      >
        { ({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <TextInput 
              placeholder = 'Username'
              placeholderTextColor="#999" 
              autoCapitalize = 'none'
              autoFocus = { true }
              autoCorrect = { false }
              textContentType = 'username'
              style = {[
                styles.input, 
                { borderColor: 
                    1 > values.username.length || values.username.length >= 3  
                        ? '#20BE94' 
                        : 'red',
                  shadowColor: 
                    1 > values.username.length || values.username.length >= 3 
                      ? "#21C5BF" 
                      : 'red'  
                }
              ]} 
              onChangeText = { handleChange ('username') }
              onBlur = { handleBlur('username') }
              value = { values.username } 
            />
            <TextInput 
              placeholder = 'Email' 
              placeholderTextColor="#999"
              autoCapitalize = 'none'
              autoCorrect = { false }
              keyboardType = 'email-address'
              textContentType = 'emailAddress'
              style = {[
                styles.input, 
                { borderColor: 
                    values.email.length < 1 || Validator.validate(values.email) 
                      ? '#20BE94' 
                      : 'red',
                  shadowColor: 
                    values.email.length < 1 || Validator.validate(values.email) 
                      ? "#21C5BF" 
                      : 'red'   
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
                      ? '#20BE94' 
                      : 'red',
                  shadowColor: 
                    1 > values.password.length || values.password.length >= 6 
                      ? "#21C5BF" 
                      : 'red'  
                }
              ]} 
              onChangeText = { handleChange ('password') }
              onBlur = { handleBlur('password') }
              value = { values.password } 
            />
            <TextInput
              placeholder = 'Confirm Password' 
              placeholderTextColor="#999"
              autoCapitalize = 'none'
              autoCorrect = { false }
              secureTextEntry = { true }
              textContentType = 'password'
              style = {[
                styles.input, 
                { borderColor: 
                    1 > values.passwordConfirmation.length || values.passwordConfirmation.length >= 6 && values.passwordConfirmation === values.password
                      ? '#20BE94' 
                      : 'red',
                  shadowColor: 
                    1 > values.passwordConfirmation.length || values.passwordConfirmation.length >= 6 && values.passwordConfirmation === values.password 
                      ? "#21C5BF" 
                      : 'red' 
                }
              ]} 
              onChangeText = { handleChange ('passwordConfirmation') }
              onBlur = { handleBlur('passwordConfirmation') }
              value = { values.passwordConfirmation } 
            />

            <Pressable 
              style = { styles.button(isValid) } 
              onPress = { handleSubmit }
              disabled = { !isValid } 
            >
              <Text style = {{ fontSize: 18 }}>Sign Up</Text>
            </Pressable>

            <View style = { styles.signupContainer }>
              <Text style = {{ color: '#F9FCE0', fontSize: 15 }}>Already have an account? </Text>
              <TouchableOpacity onPress = {() => navigation.navigate('Login')}>
                <Text style = {{ color: '#FCCF03', fontSize: 15 }}>Log In</Text>
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
    borderColor: '#21C5BF',
    backgroundColor: isValid ? '#20BE94' : '#A1E3D8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 30,
    margin: 10,
    marginTop: 20,
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
    justifyContent: 'center'
  }
});
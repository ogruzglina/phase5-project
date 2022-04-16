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
              autoCapitalize = 'none'
              autoFocus = { true }
              autoCorrect = { false }
              textContentType = 'username'
              style = {[
                styles.input, 
                { borderColor: 
                    1 > values.username.length || values.username.length >= 3  
                        ? '#aaa' 
                        : 'red' 
                }
              ]} 
              onChangeText = { handleChange ('username') }
              onBlur = { handleBlur('username') }
              value = { values.username } 
            />
            <TextInput 
              placeholder = 'Email' 
              autoCapitalize = 'none'
              autoCorrect = { false }
              keyboardType = 'email-address'
              textContentType = 'emailAddress'
              style = {[
                styles.input, 
                { borderColor: 
                    values.email.length < 1 || Validator.validate(values.email) 
                      ? '#aaa' 
                      : 'red' 
                }
              ]} 
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
              style = {[
                styles.input, 
                { borderColor: 
                    1 > values.password.length || values.password.length >= 6 
                      ? '#aaa' 
                      : 'red' 
                }
              ]} 
              onChangeText = { handleChange ('password') }
              onBlur = { handleBlur('password') }
              value = { values.password } 
            />
            <TextInput
              placeholder = 'Confirm Password' 
              autoCapitalize = 'none'
              autoCorrect = { false }
              secureTextEntry = { true }
              textContentType = 'password'
              style = {[
                styles.input, 
                { borderColor: 
                    1 > values.passwordConfirmation.length || values.passwordConfirmation.length >= 6 && values.passwordConfirmation === values.password
                      ? '#aaa' 
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
              <Text style = {{ fontSize: 18 }}>Log In</Text>
            </Pressable>

            <View style = { styles.signupContainer }>
              <Text>Already have an account? </Text>
              <TouchableOpacity style = {{ color: 'blue' }} onPress = {() => navigation.navigate('Login')}>
                <Text style = {{ color: 'blue' }}>Log In</Text>
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
  button: (isValid) => ({
    borderWidth: 1,
    borderColor: '#ff0',
    backgroundColor: isValid ? '#ff0' : '#ffb',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 30,
    margin: 10,
  }),
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,
    justifyContent: 'center'
  }
});
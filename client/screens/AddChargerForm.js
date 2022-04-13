import { View, Text, TextInput, StyleSheet, Dimensions, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Location from 'expo-location';
import axios from 'axios'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function AddChargerForm({navigation, currentUserId}) {
    
            
            //status: true,
           
           // latitude: 0,
           // longitude: 0
    
    const [ chargerType, setChargerType ] = useState("");
    const [ hours, setHours ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ cost, setCost ] = useState(0);
    const [ fee, setFee] = useState(0);
    
    async function handleSubmit(e) {
        let coordinates = await Location.geocodeAsync(address);
        console.log('coordinates', coordinates)
        console.log('coordinates.latitude', coordinates[0].latitude)

        if (coordinates !== null) {
            const newCharger = {
                charger_type: chargerType,
                address: address, 
                hours: hours, 
                fee: fee, 
                cost: cost,
                status: true,
                latitude: coordinates[0].latitude,
                longitude: coordinates[0].longitude
            }
            console.log('submit', newCharger);

            // useEffect(async () => {
            //     try {
                    // const res = await 
                axios.post(`http://localhost:3000/chargers`, newCharger)
                    .then(res => { 
                        console.log(res)
                        //onAddAnswer(res.data) 
                    })
                    .catch(function(error){
                        if(error.response) {
                            console.log(error.response.data.errors);
                        }
                    });


            //         const reviews = await res.data;
          
            //         const reviewsUsers = reviews.map( review => { 
            //           return {
            //             review: review.review,
            //             reviewId: review.id,
            //             userId: review.user.id,
            //             userAvatar: review.user.avatar,
            //             userUsername: review.user.username
            //           };
            //         });
                    
            //         setCurrentChargerReviews(reviewsUsers);
            //     } catch (e) {
            //         console.log(e);
            //     }
            //   }, []);

            // setChargerType("");
            // setHours("");
            // setAddress("");
            // setCost(0);
            // setFee(0);
        }
        //e.preventDefault();

        // axios.post('/user_answers', formData)
        //     .then(res => { onAddAnswer(res.data) })
        //     .catch(function(error){
        //         if(error.response) {
        //             console.log(error.response.data.errors);
        //         }
        //     });

        // setHasAnswered(true);
        // e.target.reset();
        // setFormData(defaultFormData)
    }
  return (
    <View>
        <View >
            <View style = {{ marginLeft: '8%', marginTop: '40%'}}>
                <TextInput 
                    placeholder = 'Charger type' 
                    style = {styles.input} 
                    onChangeText = { (e) => setChargerType(e) }
                    name = 'chargerType'
                    value = { chargerType } 
                />
                <TextInput 
                    placeholder = 'Address' 
                    style = {styles.input} 
                    onChangeText = { (e) => setAddress(e) } 
                />
                <TextInput 
                    placeholder = 'Working hours (for ex.: 07.00 - 19.00)' 
                    style = {styles.input} 
                    onChangeText = { (e) => setHours(e) }
                />
                <TextInput 
                    placeholder = 'Cost electricity per hr' 
                    style = {styles.input} 
                    onChangeText = { (e) => setCost(e) }
                    keyboardType="numeric" 
                />
                <TextInput 
                    placeholder = 'Fee' 
                    style = {styles.input} 
                    onChangeText = { (e) => setFee(e) }
                    keyboardType="numeric"
                />
            </View>
            <View style = {{ marginTop: '10%' }}>
                <Button  
                    title="Submit"
                    color = 'green'
                    onPress = { () => handleSubmit() } 
                />
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      padding: 20,
      marginTop: -height/1.6,
      borderRadius: 20,
      width: width/1.1,
      height: height/2,
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#aaa',
        borderRadius: 30,
        width: width/1.2,
        marginVertical: 10,
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
    }
  });
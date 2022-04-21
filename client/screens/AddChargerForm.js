import { View, TextInput, StyleSheet, Dimensions, Button, Pressable, Text } from 'react-native'
import React, { useState } from 'react'
import * as Location from 'expo-location';
import axios from 'axios'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function AddChargerForm({ navigation, currentUserId, setCurrentUserChargers, setChargers }) {    
    const [ chargerType, setChargerType ] = useState("");
    const [ hours, setHours ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ cost, setCost ] = useState(null);
    const [ fee, setFee] = useState(null);
    
    async function handleSubmit(e) {
        let coordinates = await Location.geocodeAsync(address);

        if (coordinates !== null) {
            const newCharger = {
                charger_type: chargerType,
                address: address, 
                hours: hours, 
                fee: fee, 
                cost: cost,
                status: true,
                latitude: coordinates[0].latitude,
                longitude: coordinates[0].longitude,
                user_id: currentUserId
            }

            axios.post(`http://localhost:3000/chargers`, newCharger)
                .then(res => {
                    setCurrentUserChargers(userChargers => [ ...userChargers, res.data ]);
                    setChargers(allChargers => [ ...allChargers, res.data ])
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

            setChargerType("");
            setHours("");
            setAddress("");
            setCost(null);
            setFee(null);
        }
    }

    return (
        <View>
            <View >
                <View style = {{ marginLeft: '8%', marginTop: '40%'}}>
                    <TextInput 
                        placeholder = 'Charger type' 
                        placeholderTextColor="#999" 
                        autoFocus = { true }
                        style = {styles.input} 
                        onChangeText = { (e) => setChargerType(e) }
                        name = 'chargerType'
                        value = { chargerType } 
                    />
                    <TextInput 
                        placeholder = 'Address' 
                        placeholderTextColor="#999"
                        style = {styles.input} 
                        onChangeText = { (e) => setAddress(e) }
                        value = { address } 
                    />
                    <TextInput 
                        placeholder = 'Working hours (for ex.: 07.00 - 19.00)'
                        placeholderTextColor="#999" 
                        style = {styles.input} 
                        onChangeText = { (e) => setHours(e) }
                        value = { hours }
                    />
                    <TextInput 
                        placeholder = 'Cost electricity per hr' 
                        placeholderTextColor="#999"
                        style = {styles.input} 
                        onChangeText = { (e) => setCost(e) }
                        keyboardType="numeric" 
                        value = { cost }
                    />
                    <TextInput 
                        placeholder = 'Fee' 
                        placeholderTextColor="#999"
                        style = {styles.input} 
                        onChangeText = { (e) => setFee(e) }
                        keyboardType="numeric"
                        value = { fee }
                    />
                
                <View style = {{ marginTop: '10%' }}>

                    <Pressable 
                        style = { styles.button } 
                        onPress = { () => handleSubmit() } 
                    >
                        <Text style = {{ fontSize: 18 }}>Submit</Text>
                    </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1.5,
        backgroundColor: '#1F1B2F',
        borderColor: '#20BE94',
        color: '#FEF5ED',
        borderRadius: 30,
        width: width/1.2,
        marginVertical: 6,
        padding: 8,
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        shadowColor: "#21C5BF",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.63,
        shadowRadius: 5,
    },
    button: {
        borderWidth: 1,
        borderColor: '#21C5BF',
        backgroundColor: '#20BE94',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 30,
        margin: 10,
        width: width/1.2,
        marginLeft: 0,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.83,
        shadowRadius: 6,
    },
  });
import { SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Map from '../components/Map'
import axios from 'axios'

export default function Home({ navigation }) {
    const [ chargers, setChargers ] = useState([]);
 
    useEffect(async () => {
        try {
            const res = await axios.get('http://localhost:3000/chargers');
            const chargersList = await res.data;
            // console.log('charger', chargersList);
            
            setChargers(chargersList);
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <SafeAreaView>
            <Map chargers = { chargers } navigation = { navigation }/>
        </SafeAreaView>
    )
}
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import Map from '../components/Map'
import axios from 'axios'

export default function Home({ navigation, currentUser }) {
    const [ chargers, setChargers ] = useState([]);
    //const [ currentUser, setCurrentUser ] = useState(null);

    console.log('homeUser', currentUser)

    // const tempUserId = 1
    // useEffect(async () => {
    //     try {
    //         const res = await axios.get(`http://localhost:3000/users/${tempUserId}`);
    //         const user = await res.data;
    //         console.log('user', user);
            
    //         setCurrentUser(user);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }, []);
 
    useEffect(async () => {
        try {
            const res = await axios.get('http://localhost:3000/chargers');
            const chargersList = await res.data;
            console.log('charger', chargersList);
            
            setChargers(chargersList);
        } catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <SafeAreaView>
            {/* <HeaderTabs /> */}
            <Map currentUser = { currentUser } chargers = { chargers } navigation = { navigation }/>

            {/* <View>
                <FlatList
                    data = { chargers }
                    renderItem = { ({ item }) => (
                    <View style={{marginBottom:20}}>
                        <Text>{ item.charger_type }</Text>
                        <Text>{ item.address }</Text>
                    </View>)}
                />
            </View> */}
        </SafeAreaView>
    )
}
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/HeaderTabs'
import Map from '../components/Map'
import axios from 'axios'

export default function Home() {
    const [ chargers, setChargers ] = useState([]);

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
            <HeaderTabs />
            <Map />
        
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
import { SafeAreaView } from 'react-native'
import React from 'react'
import Map from '../components/Map'

export default function Home({ navigation, chargersss, route }) { //
    console.log('home nav - ', navigation)
    const chargers = route.params.chargers;
    console.log('home chargers - ', route.paramsr)
    return (
        <SafeAreaView>
            <Map chargers = { chargers } navigation = { navigation }/>
        </SafeAreaView>
    )
}
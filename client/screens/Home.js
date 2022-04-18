import { SafeAreaView } from 'react-native'
import React from 'react'
import Map from '../components/Map'

export default function Home({ navigation, chargers }) {
    return (
        <SafeAreaView>
            <Map chargers = { chargers } navigation = { navigation }/>
        </SafeAreaView>
    )
}
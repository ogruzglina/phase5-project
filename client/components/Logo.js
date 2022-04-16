import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import LogoBY from "../assets/images/LogoBY.png"

export default function Logo() {
    const height = Dimensions.get('window').height;

    return (
        <View style = { styles.logoContainer}>
            <Image source = { LogoBY } style = { [styles.logo, { height: height * 0.15 }] }/>
        </View>
    )
}
  
const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    logo: {
        width: '36%',
        maxWidth: 200,
        maxHeight: 200,
    }
});
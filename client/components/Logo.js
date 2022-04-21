import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import LogoEV from "../assets/images/LogoEV.png"
import LogoEVyellow from "../assets/images/LogoEVyellow.png"

export default function Logo({ isLogin }) {
    const height = Dimensions.get('window').height;

    return (
        <View style = { styles.logoContainer}>
            <Image source = { isLogin ? LogoEV : LogoEVyellow } style = { [styles.logo, { height: height * 0.15 }] }/>
        </View>
    )
}
  
const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    logo: {
        width: '56%',
        maxWidth: 250,
        maxHeight: 200,
    },
});
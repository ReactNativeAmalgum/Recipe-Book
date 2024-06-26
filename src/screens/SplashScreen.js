import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, SIZE } from '../constants/theme'
import imagePath from '../navStrings/imagePath'
import NavStrings from '../navStrings/NavStrings'

export default function SplashScreen({navigation}) {
    useEffect(() =>{
        setTimeout(() =>{
            navigation.navigate(NavStrings.HOME)
        },3000)
    },[])
  return (
    <View style={styles.constainer}>
    <StatusBar barStyle={'light-content'} />

      <Image style={styles.logo} source={imagePath.logo} />
      <Text style={styles.appName}>Recipe Book</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    constainer:{
        flex:1,
        backgroundColor:COLORS.backgroundColor,
        justifyContent:'center',
        alignItems:'center'
    },
    logo: {
        width:SIZE.width=500,
        height:SIZE.height=500,

    },
    appName:{
        fontSize:40,
        color:'black',
        fontWeight:'bold',
        // marginTop:
    }
})
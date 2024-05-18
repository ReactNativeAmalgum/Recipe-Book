import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import NavStrings from '../navStrings/NavStrings';
import HomeScreen from '../screens/HomeScreen';
import RecipeDetails from '../screens/RecipeDetails';
import Search from '../screens/Search';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown:false}}>
    <Stack.Screen name={NavStrings.SPLASH} component={SplashScreen} />
        <Stack.Screen name={NavStrings.HOME} component={HomeScreen}/>
        <Stack.Screen name={NavStrings.DETAILS} component={RecipeDetails}/>
        <Stack.Screen name={NavStrings.SEARCH} component={Search} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}
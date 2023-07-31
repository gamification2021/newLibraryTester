import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import ParentApp from './ParentApp'
import CallLibrary from './CallLibrary'
import CallJokes from './CallJokes'

const Stack = createStackNavigator()
const AppNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='main' component={ParentApp} options={{ headerShown: false }} />
            <Stack.Screen name='lib' component={CallLibrary} options={{ headerShown: false }} />
            <Stack.Screen name='jokes' component={CallJokes} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})
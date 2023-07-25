import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ParentApp = (props) => {
    return (
        <View style={styles.container}>
            <Text>This is the parent app</Text>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate("lib");
            }} style={{ alignItems: 'center', backgroundColor: 'dodgerblue', borderRadius: 5, marginTop: 50, padding: 10, width: '50%' }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Load Library</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ParentApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
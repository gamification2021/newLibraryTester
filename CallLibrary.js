import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { NavPath } from 'rn-test-library-sixdee'
// import { FullScreenTest } from 'rn-test-library-sixdee'
import { LoadGamification, App, Gamification } from 'sample-omantel'

const CallLibrary = () => {
    return (
        // <NavPath
        //     callBack={(gift) => {
        //         console.log('This is printed from the parent app using callback ==> Game finished,, received ' + gift);
        //     }}
        // />
        // <FullScreenTest />
        // <View />
        // <TouchableOpacity style={{ backgroundColor: 'red', height: 200, width: 300 }} onPress={() => {

        // }} />
        // <View>

        // </View>
        <App />
    )
}

export default CallLibrary

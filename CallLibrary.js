import React from 'react'
import { View } from 'react-native'
import { NavPath } from 'rn-test-library-sixdee'
// import { FullScreenTest } from 'rn-test-library-sixdee'

const CallLibrary = () => {
    return (
        <NavPath
            callBack={(gift) => {
                console.log('This is printed from the parent app using callback ==> Game finished,, received ' + gift);
            }}
        />
        // <FullScreenTest />
        // <View />
    )
}

export default CallLibrary

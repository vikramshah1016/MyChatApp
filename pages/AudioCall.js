import {  
  PermissionsAndroid,
  Platform,
  TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ZegoUIKitPrebuiltCall, { ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { ZegoExpressManager } from './ZegoExpressManager/index';
import { ZegoMediaOptions } from './ZegoExpressManager/index.entity';

const AudioCallPage = () => {

  const randomUserId = String(Math.floor(Math.random() *100000))

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ZegoUIKitPrebuiltCall
            appID={1008272151}
            appSign={"a789acace5835cad4d1281572e60e66e86cd27c4fbd837c5588c565364deac5d"}
            userID={randomUserId}
            userName={'user' + randomUserId}
            callID={'testCallId' }

            config={{
                ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                // onOnlySelfInRoom: () => {navigation.navigate('Home')},
                onHangUp: () => {navigation.navigate('Home')},
                //\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
                // layout:{
                //     mode: ZegoLayoutMode.pictureInPicture,
                //     config: {
                //         showMyViewWithVideoOnly: false,
                //         isSmallViewDraggable: true,
                //         switchLargeOrSmallViewByClick: true,
                //     }
                // }
                ///\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
            }}
        />
    </View>
  )
}

const styles  = StyleSheet.create({

})

export default AudioCallPage
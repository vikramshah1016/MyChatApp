import { View, Text,Button } from 'react-native'
import React from 'react'
import ZegoUIKitPrebuiltCall, { ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={()=>navigation.navigate("Loading")} title="goto Loading screen" />
    </View>
  )
}

export default HomeScreen
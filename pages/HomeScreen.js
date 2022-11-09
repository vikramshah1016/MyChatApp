import {   
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  View, Text,Button } from 'react-native'
import React from 'react'


const HomeScreen = ({navigation}) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={()=>navigation.navigate("AudioCall")} title="Call" />
    </View>
  )
}

export default HomeScreen
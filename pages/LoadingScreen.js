import { View, Text, Button } from 'react-native'
import React from 'react'

const LoadingScreen = ({navigation})=>{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading Screen</Text>
        <Button onPress={()=>navigation.navigate("Home")} title="goto Home screen" />
      </View>
    );
  }

export default LoadingScreen
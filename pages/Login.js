import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox'
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  return (
    <View style={styles.mainContainer} >
        <View style={styles.appLogoContainer} >
        <Image
         style={styles.appLogo}
         source={require("../assets/MainScreen/applogo.png")} />
        </View>
      <Text style={styles.mainHeader}>Login</Text>
      <Text style={styles.description}>Login in the App with your credentials</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
         style={styles.inputStyle}
         autoCapitalize='none' autoCorrect={false}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your password</Text>
        <TextInput
        style={styles.inputStyle}
        autoCapitalize='none' autoCorrect={false}/>
      </View>
      {/* <View style={styles.checkboxContainer}>
        <Checkbox />
        <Text style={styles.wrapperText}>{" "} I have read and agreed terms and conditions</Text>
      </View> */}
      <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate("Home")}>
        <Text style={styles.BtnText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.footer} >
        <Text style={{textAlign:'center'}} >
            Don't have an account?
        </Text>
        <TouchableOpacity style={styles.RegisterBtn} 
         onPress = {()=>navigation.navigate('Register')}
         >
        <Text style={{...styles.BtnText,color:'black'}}>Register</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        paddingTop:120,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor:"white",
        flex:1,
        position:'relative'
    },
    appLogoContainer:{
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
        borderRadius:200,
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:50
    },
    appLogo:{
        width: 75,
        height: 75
    },
    mainHeader:{
        fontSize:30,
        fontWeight:'bold',
    },
    description:{
        color:"gray"
    },
    inputContainer:{
        paddingTop:15,
        paddingBottom:15,
    },
    labels:{
        color:"gray"
    },
    inputStyle:{
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.3)",
        paddingHorizontal:15,
        paddingVertical:7,
        // borderRadius:1
    },
    checkboxContainer:{
        flex:1,
        flexDirection:'row'
    },
    wrapperText:{
        // display:'inline-block'
        flex:1
    },
    loginBtn:{
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor:'black',
        width:100,
        hight:400,
    },
    BtnText:{
        // padding:
        // fontSize:1,
        textAlign:'center',
        padding:10,
        color:'white',
        fontWeight:'bold'
    },
    footer:{
        marginTop:'auto',
        bottom:10,
        width:'auto',
        // paddingLeft:15,
        // paddingRight:15
    },
    RegisterBtn:{
        color:'black',
        backgroundColor:'transparent',
        borderWidth:1
    }
})

export default Login
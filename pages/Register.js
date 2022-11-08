import { View, Text, StyleSheet,TouchableOpacity, TextInput} from 'react-native'
import React from 'react'

const Register = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Register</Text>
      {/*form*/}
      <View style={styles.formContainer}>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your First name</Text>
        <TextInput
         style={styles.inputStyle}
         autoCapitalize='none' autoCorrect={false}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Last name</Text>
        <TextInput
         style={styles.inputStyle}
         autoCapitalize='none' autoCorrect={false}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Phone number</Text>
        <TextInput
         style={styles.inputStyle}
         autoCapitalize='none' autoCorrect={false}/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Password</Text>
        <TextInput
         style={styles.inputStyle}
         autoCapitalize='none' autoCorrect={false}/>
      </View>
        
      </View>
      {/*submit button*/}
      <TouchableOpacity style={styles.SubmitBtn} 
         onPress = {()=>navigation.navigate('Home')}
         >
        <Text style={{color:'white',textAlign:'center'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        paddingTop:10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor:"white",
        flex:1,
        position:'relative'
    },
    SubmitBtn:{
        color:'white',
        backgroundColor:'black',
        borderWidth:1,
        padding:10,
        marginTop:'auto',
        marginBottom:10
    },
    mainHeader:{
        fontSize:30,
        fontWeight:'bold',
    },
    formContainer:{
        paddingTop:20
    },
    inputContainer:{
        paddingTop:15,
        paddingBottom:15,
    },
    labels:{
        color:"black",
        fontWeight:'bold',
        marginBottom:5
    },
    inputStyle:{
        borderWidth:1,
        borderColor:"rgba(0,0,0,0.3)",
        paddingHorizontal:15,
        paddingVertical:7,
        // borderRadius:1
    },
})

export default Register
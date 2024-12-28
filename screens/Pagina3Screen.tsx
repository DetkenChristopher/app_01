import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Pagina3Screen() {

const [nombre, setnombre] = useState('')
const [edad, setedad] = useState(0)
useEffect(() => {
 if(edad<0)(
    setedad(0)
 )
}, [edad])


function usuario(){
    Alert.alert('Meensaje','El nombre del usuario es ' + nombre +' -y tiene '+ edad + 'años')
}

  return (
    <View style={styles.container}>
<Text style={{fontSize:40}}>Formulario</Text>
      <TextInput
      style={styles.input}
      placeholder='Ingresar Nombre'
      onChangeText={(texto)=>setnombre(texto)}
      />
      <TextInput
    style={styles.input}
    placeholder='Edad' 
    keyboardType='numeric'
    onChangeText={(texto)=>setedad(+texto)}
    
    />
    <Button  title='aceptar' onPress={()=>usuario()}/>
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
backgroundColor:'#656066',
fontSize:20,
height:50,
width:'85%',
margin:5
    },
    container:{
flex:1,
alignItems:'center',
justifyContent:'center',
    }
})
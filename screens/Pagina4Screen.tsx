import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Pagina4Screen() {
    //Crear una aplicacion que tranforme de kelvin a celsius y a farhenheit y que kelvin no sea negativo

const [Kelvin, setKelvin] = useState(0)

useEffect(() => {
  if(Kelvin<0){
    setKelvin(0)
  }
}, [Kelvin])

function calcular(){
    let celsius = Kelvin - 273.15
    let farhenheit = (Kelvin - 273.15) * 9/5 + 32
    alert('Celsius: ' + celsius + ' Farhenheit: ' + farhenheit)
}

  return (
    <View>
      <Text style={styles.container} >Calcular Grados</Text>
      <TextInput style={styles.input}  placeholder='Grados Kelvin'
      onChangeText={(texto)=>setKelvin(+texto)}
      keyboardType='numeric'/>

        <Button  title='aceptar' onPress={()=>calcular()}/>
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
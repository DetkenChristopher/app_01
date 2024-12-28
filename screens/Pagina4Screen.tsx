import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function Pagina4Screen() {
    //Crear una aplicacion que tranforme de kelvin a celsius y a farhenheit y que kelvin no sea negativo
  return (
    <View>
      <Text>Calcular Grados</Text>
      <TextInput />

    </View>
  )
}

const styles = StyleSheet.create({})
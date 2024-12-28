import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta(props:any) {
    //console.log(props.informacion.name);
    function detalles(item:any){
      Alert.alert(item.name,item.description + '\n\Attributos: \n'+ item.atributos)
    }
  return (
    <TouchableOpacity style={styles.container} onPress={()=>detalles(props.informacion)}>
      <Text style={styles.txtTitulo}>{props.informacion.name}</Text>
      <View style={styles.fila}>
      <Image 
      source={{uri:props.informacion.image}}
      style={styles.img}
      />
      <Text style={styles.txtDescription}>{props.informacion.description}</Text>
      </View>
      
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    txtTitulo:{
        fontSize:30,
        color:'#0206de',
        textAlign:'center'
      },

      img:{
        height:150,
        width:150,
        resizeMode:'contain'
      },
      container:{
        margin:10,
        padding:10,
        backgroundColor:'#8a8a93',
        borderRadius:10,
      },
      fila:{
        flexDirection:'row',
        justifyContent:'center'

      },
      txtDescription:{
        color:'white',
        width:'50%',
        fontSize:15,
        textAlign:'justify'

      }
})
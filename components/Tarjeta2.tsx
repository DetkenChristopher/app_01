import { StyleSheet, Text, View, TouchableOpacity, Modal, Button, Image } from 'react-native';
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';

export default function Tarjeta2(props:any) {
  //  console.log(props.datos)

  const [Visible, setVisible] = useState(false)
  return (
    <TouchableOpacity style={styles.container} onPress={()=>setVisible(true)}>
      <Text style={styles.txtNombre}>{props.datos.name.first} {props.datos.name.last}</Text>
    <Modal visible={Visible}>
        <View style={styles.modal}>
            <Text style={styles.txtNombre}> {props.datos.name.first} {props.datos.name.last} </Text>
            <Text>{props.datos.occupation}</Text>
            <Image source={{uri:props.datos.images.main}} style={styles.img}/>
            <Button title='cerrar' onPress={()=>setVisible(false)}/>
           
        </View>

    </Modal>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    txtNombre:{
        fontSize:30,
        alignSelf:'center',
    },
    container:{
        backgroundColor:'#4cbe13',
        margin:5,
        padding:5,
        borderRadius:10,
        
    },
    modal:{
        backgroundColor:'#f19409',
        flex:1,
        justifyContent:'center',
        
    },
    img:{
        width:150,
        height:300,
        alignSelf:'center',
    },

})
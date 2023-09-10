import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Header = ({title,isIcon,icon}) => {
  return (
    <View style={styles.header}>
     { isIcon?<TouchableOpacity style={styles.backBtn} >
        <Image source={icon} style={styles.back}/>
      </TouchableOpacity>:null}
      <Text style={[styles.title,{marginLeft:isIcon?10:0}]}>{title}</Text>
    </View>
  )
}

export default Header

const styles=StyleSheet.create({
    header:{
        height:60,
        width:'100%',
        flexDirection:'row',
        backgroundColor:'#fff',
        elevation:5,
        alignItems:'center',
        paddingLeft:20
    },
    back:{
      width:24,
      height:24,
    },
    backBtn:{
      width:30,
      height:30,
      borderRadius:15,
      paddingTop:15
    },
    title:{
      fontSize:18,
      fontWeight:'600',
      paddingTop:15

    }
})
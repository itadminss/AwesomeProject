 
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';
 

export default function Ex08() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex : 1,justifyContent:'space-between',flexDirection:'row',alignItems:'center',alignContent:'space-around' }}>    
      <View style={{backgroundColor : '#50E3C2', height: 100,width:100  }}></View>     
      <View style={{backgroundColor : '#4A90E2' , height: 100,width:100 }}></View>   
      <View style={{backgroundColor : '#9013FE' , height: 100,width:100 }}></View>    
    </View>
 
      <Button title="Next" onPress={() => navigation.navigate("Ex09")} />
  </View>
  );
}
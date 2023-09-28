import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput ,Button } from 'react-native';

export default function App() {
  const [value, onChangeText] = 	React.useState('');  
  return (
    <View style={styles.container}>
      <Text style={{'marginBottom':20}}>Basic App</Text>
      <TextInput style={styles.inputStyle} placeholder="Type something"
	    onChangeText={text => onChangeText(text)} value={value}/>
      <Text>{value}</Text>
      <StatusBar style="auto"/>
      <Button style={styles.buttonStyle} onPress={()=> onChangeText(null)} title="Clear"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle : {
    width: 300,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom:10
  },
  buttonStyle : {
    cursor : 'pointer',
    color : "#841584"
  }
});

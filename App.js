import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput } from 'react-native';

export default function App() {
  const [value, onChangeText] = 	React.useState('');  
  return (
    <View style={styles.container}>
      <Text style={{'marginBottom':20}}>Basic App</Text>
      <TextInput style={styles.inputStyle} placeholder="Type something"
	    onChangeText={text => onChangeText(text)}
      clearTextOnFocus="true"
      value={value}/>
      <Text>{value}</Text>
      <StatusBar style="auto"/>
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
  }
});

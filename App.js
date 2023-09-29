import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , TextInput ,Button, Switch } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [value, onChangeText] = 	React.useState('');  
  return (
    <View style={styles.container} backgroundColor={isEnabled ? "#ffffff" : "#000000"} >
      <Switch
        trackColor={{false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#777777" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={{ color: isEnabled ? "#000000" : "#ffffff", marginTop : 10 }}>Basic App</Text>
      <TextInput borderColor={isEnabled ? "#000000" : "#ffffff"} style={styles.inputStyle} placeholder="Type something"
	    onChangeText={text => onChangeText(text)} value={value}/>
      <Text style={{ color: isEnabled ? "#000000" : "#ffffff" }}>{value}</Text>
      <StatusBar style="auto"/>
      <Button backgroundColor={isEnabled ? "#000000" : "#ffffff"}  style={styles.buttonStyle} onPress={()=> onChangeText(null)} title="Clear"/>
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
    backgroundColor : '#fff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom:10,
    marginTop:10,
  },
  buttonStyle : {
    cursor : 'pointer',
    color : "#841584"
  }
});

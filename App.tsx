import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  const [name, setName] = useState<string>('kavooce');
  const [age, setAge] = useState<number>(30);

  const handleChange = (val: string, type:"name" | "age") => {
    if(type === "name"){
      setName(val);
    }
    if(type === "age"){
      setAge(Number(val));
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder="ex John Doe"
        onChangeText={val => handleChange(val,"name")}
      />
      <Text>Enter age:</Text>
      <TextInput
        style={styles.input}
        placeholder="ex 30"
        onChangeText={val => handleChange(val,"age")}
        keyboardType="numeric"
      />
      <Text>
        name: {name || "Mario"} age: {age || 30}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default App;

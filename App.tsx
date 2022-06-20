import React, { useState } from 'react'
import {
  Button,
  StyleSheet,
  Text, View
} from 'react-native';

const App = () => {
  const [name, setName] = useState("kavooce");
  const [person, setPerson] = useState({ name: "mario", age: 30 });

  const handlePressText = () => {
    setName("cat")
  }

  const handlePressObject = () => {
    setPerson({ name: "luigi", age: 40});
  }

  return (
    <View style={styles.container}>
      <Text>My name is { name }</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="update text" color={"white"} onPress={handlePressText} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="update object" color={"white"} onPress={handlePressObject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
  },
  buttonContainer: {
    marginTop:20,
    backgroundColor:"#000",
    borderRadius:25,
    padding:10,
    display:"flex",
    width:"90%",
  },
  
});

export default App;

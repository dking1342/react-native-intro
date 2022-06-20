import React from 'react'
import {
  StyleSheet,
  Text, View
} from 'react-native';

const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt totam ad dolore aspernatur commodi possimus vero ducimus illum enim sint.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt totam ad dolore aspernatur commodi possimus vero ducimus illum enim sint.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt totam ad dolore aspernatur commodi possimus vero ducimus illum enim sint.</Text>
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
  header: {
    backgroundColor:"pink",
    padding:20,
  },
  body:{
    backgroundColor:"yellow",
    padding:20,
  },
  boldText: {
    fontWeight:"bold",
  }
});

export default App;

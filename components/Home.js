//import liraries
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

// create a component
const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height:120,
    padding:24,
    backgroundColor:"#eee",
    justifyContent:"flex-end",
  },
  text:{
    fontSize:24,
    fontFamily:"Nunito-Regular",

  }
});

//make this component available to the app
export default Home;

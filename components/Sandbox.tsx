//import liraries
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// create a component
const Sandbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxOne}>
        <Text>one</Text>
      </View>
      <View style={styles.boxTwo}>
        <Text>two</Text>
      </View>
      <View style={styles.boxThree}>
        <Text>three</Text>
      </View>
      <View style={styles.boxFour}>
        <Text>four</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    paddingTop:80,
    backgroundColor:"darkslateblue",
  },
  boxOne:{
    flex:1,
    backgroundColor:"orange",
    padding:10,
    height:100,
    // flexBasis:150,
    justifyContent:"center",
    // textAlign:"center",
    alignItems:"center",
  },
  boxTwo:{
    flex:2,
    backgroundColor:"yellow",
    // padding:20,
    height:100,
    justifyContent:"flex-start",
    alignItems:"center",
  },
  boxThree:{
    flex:3,
    backgroundColor:"coral",
    // padding:30,
    height:100,
    justifyContent:"flex-end",
    alignItems:"flex-end",
  },
  boxFour:{
    flex:3,
    backgroundColor:"cornflowerblue",
    // padding:40,
    height:100,
    justifyContent:"center",
    alignItems:"flex-end",
  },
});

//make this component available to the app
export default Sandbox;

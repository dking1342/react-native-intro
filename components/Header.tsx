//import liraries
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// create a component
const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  header:{
    height:120,
    paddingBottom:15,
    backgroundColor:"coral",
    justifyContent:"flex-end",
  },
  title:{
    textAlign:"center",
    color:"#fff",
    fontSize:20,
    fontWeight:"bold",
  },

});

//make this component available to the app
export default Header;

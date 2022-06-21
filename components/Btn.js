//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Btn = ({ text, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{ text }</Text>
      </View>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  button:{
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:"#f01d71",
  },
  buttonText:{
    color:"#fff",
    fontWeight:"bold",
    textTransform:"uppercase",
    fontSize:16,
    textAlign:"center"
  },
});

//make this component available to the app
export default Btn;

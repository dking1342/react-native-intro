//import liraries
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

// create a component
const About = () => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding:24,
  },
});

//make this component available to the app
export default About;

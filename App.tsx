import React from 'react'
import {
  StyleSheet,
  Text, View
} from 'react-native';



const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    padding:25,
  },
  text:{
    fontSize:24,
    fontWeight:"bold",
    textAlign:"center",
  }
});

export default App;

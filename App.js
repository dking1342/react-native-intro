import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cat Meow!!</Text>
      <Image source={{uri:"https://randomuser.me/api/portraits/men/1.jpg"}} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  text: {
    color:"#fff",
    fontSize:48,
  },
  img:{
    width:100,
    height:100,
    borderRadius: 100 / 2,
    margin:25,
  }
});

//make this component available to the app
export default App;

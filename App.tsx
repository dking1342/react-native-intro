import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, ScrollView } from 'react-native';

const App = () => {
  const [people, setPeople] = useState([
    {name: "kavooce", id:"1"},
    {name: "mario", id:"2"},
    {name: "yoshi", id:"3"},
    {name: "luigi", id:"4"},
    {name: "peach", id:"5"},
    {name: "toad", id:"6"},
    {name: "bowser", id:"7"},
  ])


  return (
    <View style={styles.container}>
      <FlatList 
        data={people} 
        keyExtractor={(item)=> item.id }
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>  
        )} 
        numColumns={2}
        key={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop:24,
    padding:50,
    backgroundColor:"pink",
    fontSize:24,
    marginHorizontal:10,
    
  }

});

export default App;

import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import uuid from 'react-native-uuid';
import ListItem from './components/ListItem';

const App = () => {
  const [items,setItems] = useState([
    {
      id:uuid.v4(),
      text:"Milk"
    },
    {
      id:uuid.v4(),
      text:"Eggs"
    },
    {
      id:uuid.v4(),
      text:"Bread"
    },
    {
      id:uuid.v4(),
      text:"Juice"
    },
  ]);

  const handleDeleteItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList data={items} renderItem={({item})=>(
        <ListItem key={item.id} item={item} handleDeleteItem={handleDeleteItem} />
      )} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60,
  },
});

export default App;

//import liraries
import React from 'react';
import { FlatList, ScrollView, StyleSheet, View,Text } from 'react-native';
import { TodoType } from '../App';
import TodoItem from './TodoItem';

interface TodoProps {
  todos: TodoType[];
  handleDelete: (id: string) => void;
}

// create a component
const TodoList = ({todos, handleDelete}: TodoProps) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        ListFooterComponent={<View style={{height: 20}}/>}
        renderItem={({item}) => (
          // <Text style={styles.item}>{item.text}</Text>
          <TodoItem key={item.id} todo={item} handleDelete={handleDelete} />
        )}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  list: {
    flex:1,
    marginTop: 10,
    padding:50,
  },
  item:{
    padding:30,
    borderWidth:1,
    color:"white",
    borderColor:"white",
    backgroundColor:"green",    
    textAlign:"center",
  }
});

//make this component available to the app
export default TodoList;

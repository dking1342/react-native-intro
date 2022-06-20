//import liraries
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
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
        renderItem={({item}) => (
          <TodoItem key={item.id} todo={item} handleDelete={handleDelete} />
        )}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});

//make this component available to the app
export default TodoList;

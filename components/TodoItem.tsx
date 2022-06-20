//import liraries
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TodoType} from '../App';

interface TodoProp {
  todo: TodoType;
  handleDelete: (id: string) => void;
}

// create a component
const TodoItem = ({todo, handleDelete}: TodoProp) => {
  return (
    <View style={styles.todo}>
      <Text>{todo.text}</Text>
      <TouchableOpacity onPress={() => handleDelete(todo.id)}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  todo: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#eee',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

//make this component available to the app
export default TodoItem;

import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import AddItem from './components/AddItem';
import Header from './components/Header';
import TodoList from './components/TodoList';

export interface TodoType {
  text: string;
  id: string;
}

const App = () => {
  const [todos, setTodos] = useState<TodoType[]>([
    {text: 'buy coffee', id: '1'},
    {text: 'create an app', id: '2'},
    {text: 'run around', id: '3'},
  ]);

  const handleDelete = (id: string) => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  const handleAddItem = (
    val: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    if (val) {
      const newTodo: TodoType = {
        id: Math.ceil(Math.random() * 1000000).toString(),
        text: val,
      };
      setTodos(prev => [newTodo, ...prev]);
      setText('');
    } else {
      Alert.alert('Error', 'Please enter a valid todo', [{text: 'OK'}]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem handleAddItem={handleAddItem} />
      <View style={styles.content}>
        <TodoList todos={todos} handleDelete={handleDelete} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
});

export default App;

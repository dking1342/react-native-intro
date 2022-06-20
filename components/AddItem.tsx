import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

interface PropTypes {
  handleAddItem: (
    val: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
  ) => void;
}

const AddItem = ({handleAddItem}: PropTypes) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.textContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter todo"
        value={text}
        onChangeText={val => setText(val)}
      />
      <TouchableOpacity
        onPress={() => handleAddItem(text, setText)}
        style={styles.submitBtn}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    paddingTop: 10,
    paddingBottom:15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  submitBtn: {
    width: '100%',
    marginTop: 15,
    backgroundColor: '#619eff',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 24,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});

export default AddItem;

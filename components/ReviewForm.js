//import liraries
import {Formik} from 'formik';
import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {globalStyles} from '../styles/global';

// create a component
const ReviewForm = ({ setReviews, setIsModelOpen }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: '',
          body: '',
          rating: '',
        }}
        onSubmit={(values, actions) => {
          // validation
          
          const newReview = {
            ...values,
            key: Math.ceil(Math.random() * 100000).toString(),
          };
          setReviews(prev => [newReview,...prev]);
          actions.resetForm();
          setIsModelOpen(false);
          
        }}>
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            />
            <Button title="Submit" color="maroon" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
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
});

//make this component available to the app
export default ReviewForm;

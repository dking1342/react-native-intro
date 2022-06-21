//import liraries
import {Formik} from 'formik';
import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {globalStyles} from '../styles/global';
import * as yup from 'yup';

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number between 1 and 5', val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

// create a component
const ReviewForm = ({setReviews, setIsModelOpen}) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: '',
          body: '',
          rating: '',
        }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {

          const newReview = {
            ...values,
            key: Math.ceil(Math.random() * 100000).toString(),
          };
          setReviews(prev => [newReview, ...prev]);
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
              onBlur={props.handleBlur("title")}
            />
            <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title}</Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>{ props.touched.body && props.errors.body }</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>{ props.touched.rating && props.errors.rating }</Text>

            <Button
              title="Submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
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

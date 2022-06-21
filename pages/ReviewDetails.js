//import liraries
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

// create a component
const ReviewDetails = ({ route }) => {



  return (
    <View style={globalStyles.container}>
      <Text>Review Details</Text>
      <Text>Key: {route.params.payload.key}</Text>
      <Text>Title: {route.params.payload.title}</Text>
      <Text>Rating: {route.params.payload.rating}</Text>
      <Text>Body: {route.params.payload.body}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default ReviewDetails;

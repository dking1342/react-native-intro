//import liraries
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import { globalStyles } from '../styles/global';

// create a component
const ReviewDetails = ({ route }) => {



  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>Title: {route.params.payload.title}</Text>
        <Text>Body: {route.params.payload.body}</Text>
        <Text>Rating: {route.params.payload.rating}</Text>
      </Card>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default ReviewDetails;

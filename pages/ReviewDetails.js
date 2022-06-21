//import liraries
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../styles/global';

// create a component
const ReviewDetails = ({ route, navigation }) => {
  const [id,setId] = useState(null);
  const [text, setText] = useState(null);
  const [payload,setPayload] = useState(null);


  useEffect(()=>{
    if(route.params.id && route.params.text){
      // const { paramId, paramText } = route.params;
      setId(route.params.id);
      setText(route.params.text);
    }
    if(route.params?.payload){
      setPayload(route.params.payload);
    }
  },[])

  return (
    <View style={globalStyles.container}>
      <Text>Review Details</Text>
      {
        id && (
          <View>
            <Text>ID: {id}</Text>
            <Text>Text: {text}</Text>      
          </View>
        )
      }
      {
        payload && (
          <View>
            <Text>Key: {payload.key}</Text>
            <Text>Title: {payload.title}</Text>
            <Text>Rating: {payload.rating}</Text>
            <Text>Body: {payload.body}</Text>
          </View>
        )
      }
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to first stack" onPress={() => navigation.popToTop()} />
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({

});

//make this component available to the app
export default ReviewDetails;

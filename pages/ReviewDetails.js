//import liraries
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from '../components/Card';
import { globalStyles } from '../styles/global';

// create a component
const ReviewDetails = ({ route }) => {
  const [imgSource,setImgSource]=useState(null);
  const [source,setSource]=useState({
    "1":require("../assets/images/rating-1.png"),
    "2":require("../assets/images/rating-2.png"),
    "3":require("../assets/images/rating-3.png"),
    "4":require("../assets/images/rating-4.png"),
    "5":require("../assets/images/rating-5.png"),
  });

  useEffect(()=>{
    if(route.params?.payload.rating){
      setImgSource(route.params.payload.rating);
    }
  },[route])
  
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>Title: {route.params.payload.title}</Text>
        <Text>Body: {route.params.payload.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating: </Text>
          <Image source={source[imgSource]} />
        </View>
      </Card>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  rating:{
    flexDirection:"row",
    justifyContent:"center",
    paddingTop:16,
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:"#eee",
  },
});

//make this component available to the app
export default ReviewDetails;

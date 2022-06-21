//import liraries
import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {globalStyles} from '../styles/global';

// create a component
const Home = ({navigation}) => {
  const [reviews, setReviews] = useState([
    {title: 'Zelda', rating: 5, body: 'lorem ipsum', key: '1'},
    {title: 'Catch Me if you can', rating: 4, body: 'lorem ipsum', key: '2'},
    {title: 'Cast Away', rating: 3, body: 'lorem ipsum', key: '3'},
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button
        title="Go to Review Details"
        onPress={() => navigation.navigate('Review Details')}
      />
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Review Details', {
            id: 86,
            text: 'Hello',
          });
        }}
      />

      <FlatList
        data={reviews}
        // keyExtractor={(review)=>review.id}

        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Review Details', {payload: item})
            }>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Home;

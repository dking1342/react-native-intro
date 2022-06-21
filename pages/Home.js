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
      <FlatList
        data={reviews}
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

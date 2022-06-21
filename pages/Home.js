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
import Card from '../components/Card';
import {globalStyles} from '../styles/global';

// create a component
const Home = ({navigation}) => {
  const [reviews, setReviews] = useState([
    {title: 'Zelda', rating: 5, body: 'lorem ipsum', key: '1'},
    {title: 'Mario Bros', rating: 4, body: 'lorem ipsum', key: '2'},
    {title: 'NBA Jam', rating: 3, body: 'lorem ipsum', key: '3'},
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
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
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

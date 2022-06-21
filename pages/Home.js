//import liraries
import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Card from '../components/Card';
import {globalStyles} from '../styles/global';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';

// create a component
const Home = ({navigation}) => {
  const [isModalOpen, setIsModelOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {title: 'Zelda', rating: 5, body: 'lorem ipsum', key: '1'},
    {title: 'Mario Bros', rating: 4, body: 'lorem ipsum', key: '2'},
    {title: 'NBA Jam', rating: 3, body: 'lorem ipsum', key: '3'},
  ]);

  return (
    <View style={globalStyles.container}>
      <Modal visible={isModalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcon
            name="close"
            size={24}
            onPress={() => setIsModelOpen(false)}
            style={{...styles.modalToggle,...styles.modalClose}}
          />
          <Text>Hello from the modal!</Text>
        </View>
      </Modal>

      <MaterialIcon name="add" size={24} onPress={() => setIsModelOpen(true)} style={styles.modalToggle} />
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
const styles = StyleSheet.create({
  modalContent: {
    flex:1,

  },
  modalToggle:{
    marginBottom:10,
    borderWidth:1,
    borderColor:"#f2f2f2",
    padding:10,
    borderRadius:10,
    alignSelf:"center",
  },
  modalClose:{
    marginTop:40,
    marginBottom:0,
  },
});

//make this component available to the app
export default Home;

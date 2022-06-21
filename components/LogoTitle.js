//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { globalStyles } from '../styles/global';

// create a component
const LogoTitle = (props) => {
  
  return (
    <View style={styles.headerTitle}>
      <Image
        style={styles.headerImage}
        source={require('../assets/images/heart_logo.png')}
      />
      <Text style={globalStyles.titleText}>{props.id}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});

//make this component available to the app
export default LogoTitle;

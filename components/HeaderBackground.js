//import liraries
import React from 'react';
import { StyleSheet, Image } from 'react-native';

// create a component
const HeaderBackground = () => {
  return (
    <Image
      style={styles.headerBackground}
      source={require('../assets/images/game_bg.png')}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  headerBackground: {
    width: '100%',
    height: '100%',
  },
});

//make this component available to the app
export default HeaderBackground;

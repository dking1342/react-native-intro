//import liraries
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import HeaderBackground from '../components/HeaderBackground';
import LogoTitle from '../components/LogoTitle';
import About from '../pages/About';
import Home from '../pages/Home';

const Drawer = createDrawerNavigator();


// create a component
const HomeDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => <LogoTitle {...props} id="Game Zone" />,
          headerBackground: () => <HeaderBackground />,
        }}
      />
      <Drawer.Screen 
        name="About" 
        component={About} 
        options={{
          headerTitle: props => <LogoTitle {...props} id="About" />,
          headerBackground: () => <HeaderBackground />,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
  },
  headerBackground: {
    width: '100%',
    height: '100%',
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});

//make this component available to the app
export default HomeDrawer;

//import liraries
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../pages/Home";
import About from "../pages/About";

const Drawer = createDrawerNavigator();

// create a component
const HomeDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={Home} options={{title:"Game Zone"}} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};


//make this component available to the app
export default HomeDrawer;

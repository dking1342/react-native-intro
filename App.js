//import liraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from './pages/Home';
import ReviewDetails from "./pages/ReviewDetails";
import About from "./pages/About";

const Stack = createNativeStackNavigator();

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Review Details" component={ReviewDetails} options={({route}) => ({title:route.params.payload.title,headerTintColor:"#444",headerStyle:{backgroundColor:"orange"}})}/>
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;

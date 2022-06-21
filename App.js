//import liraries
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ReviewDetails from './pages/ReviewDetails';
import HomeDrawer from './routes/HomeDrawer';
import HeaderBackground from './components/HeaderBackground';

const Stack = createNativeStackNavigator();

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeStack"
          component={HomeDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Review Details"
          component={ReviewDetails}
          options={({route}) => ({
            title: route.params.payload.title,
            headerTintColor: '#444',
            headerBackground: () => <HeaderBackground />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;

import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/home/Home';
import Login from './src/pages/login/Login';

const StackNavigator = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="Home" component={Home} />
        <StackNavigator.Screen name="Login" component={Login} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;

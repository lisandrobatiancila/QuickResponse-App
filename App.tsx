import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Registration from './src/pages/Register';

const StackNavigator = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="Home">
        <StackNavigator.Screen
          name="Home"
          component={Home}
          options={{
            title: 'QR-App',
          }}
        />
        <StackNavigator.Screen
          name="Login"
          component={Login}
          options={{
            headerBackVisible: false,
          }}
        />
        <StackNavigator.Screen name="Register" component={Registration} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;

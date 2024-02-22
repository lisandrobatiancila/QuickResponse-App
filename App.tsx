import React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Registration from './src/pages/Register';
import DashBoard from './src/pages/Dashboard';
import {COLOR_LISTS} from './src/constants/colors';

const StackNavigator = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Home"
        screenOptions={{contentStyle: {backgroundColor: COLOR_LISTS.WHITE}}}>
        <StackNavigator.Screen
          name="Home"
          component={Home}
          options={{
            title: 'QR-App',
            headerShown: false,
          }}
        />
        <StackNavigator.Screen
          name="Login"
          component={Login}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />
        <StackNavigator.Screen name="Register" component={Registration} />
        <StackNavigator.Screen
          name="Dashboard"
          component={DashBoard}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;

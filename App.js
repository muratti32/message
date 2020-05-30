import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import TabNavigator from './screens/TabNavigator'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="tab_navigator" component={TabNavigator}
      options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App


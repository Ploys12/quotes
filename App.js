import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuoteGenerator from './Components/QuoteGenerator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="QuoteGenerator" component={QuoteGenerator} options={{ title: 'Цитатный генератор' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

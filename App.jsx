import React from 'react';
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './components/MainScreen'
import ArticleShow from './components/ArticleShow'

const Stack = createStackNavigator()

const App = () => {
  const { appTitle } = useSelector(state => state)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={MainScreen}
          options={{
            title: appTitle,
            headerStyle: {
              backgroundColor: 'purple'
            },
            headerTitleStyle: {
              color: 'white',
              fontSize: 22
            }
          }}
        />

        <Stack.Screen
          name="ArticleShow"
          component={ArticleShow}
          options={{
            title: 'My article'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

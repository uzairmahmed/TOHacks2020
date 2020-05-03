import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Dash from '../components/Home'

const Stack = createStackNavigator()

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Dashboard' component={Dash} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
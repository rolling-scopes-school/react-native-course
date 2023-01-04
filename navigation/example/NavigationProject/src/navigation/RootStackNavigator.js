import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { colors } from '../assets/colors'
import BottomTabNavigator from './BottomTabNavigator'
import { Notifications } from '../screens'

const Stack = createNativeStackNavigator()

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: '',
        headerTitleStyle: { color: colors.sharpBlue },
      }}
    >
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  )
}

export default RootStackNavigator

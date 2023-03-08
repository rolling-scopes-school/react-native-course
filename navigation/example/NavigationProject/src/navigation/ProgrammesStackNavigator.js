import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../assets/colors'
import { Programmes, ProgrammeDetails } from '../screens'

const Stack = createNativeStackNavigator()

const ProgrammesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: '',
        headerTitleStyle: { color: colors.sharpBlue },
      }}
      initialRouteName="Programmes"
    >
      <Stack.Screen
        name="Programmes"
        component={Programmes}
        options={{
          title: 'Programmes',
        }}
      />
      <Stack.Screen
        name="ProgrammeDetails"
        component={ProgrammeDetails}
        options={{
          title: 'Programme Details',
        }}
      />
    </Stack.Navigator>
  )
}

export default ProgrammesStackNavigator

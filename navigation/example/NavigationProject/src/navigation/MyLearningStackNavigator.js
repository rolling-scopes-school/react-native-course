import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../assets/colors'
import { MyLearning, CourseDetails } from '../screens'

const Stack = createNativeStackNavigator()

const MyLearningStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: '',
        headerTitleStyle: { color: colors.sharpBlue },
      }}
    >
      <Stack.Screen
        name="MyLearning"
        component={MyLearning}
        options={{
          title: 'My Learning',
        }}
      />
      <Stack.Screen
        name="CourseDetails"
        component={CourseDetails}
        options={{
          title: 'Course Details',
        }}
      />
    </Stack.Navigator>
  )
}

export default MyLearningStackNavigator

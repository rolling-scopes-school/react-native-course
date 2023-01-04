import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../assets/colors'
import { NavButton, NavigationHeader } from '../components'
import { Home, News } from '../screens'

const Stack = createNativeStackNavigator()

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: '',
        headerTitleStyle: { color: colors.sharpBlue },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: () => <NavigationHeader />,
          headerLeft: () => (
            <NavButton
              onPress={() => navigation.toggleDrawer()}
              iconName="bars"
            />
          ),
          headerRight: () => (
            <NavButton
              onPress={() => navigation.navigate('Notifications')}
              iconName="bell"
            />
          ),
        })}
      />
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator

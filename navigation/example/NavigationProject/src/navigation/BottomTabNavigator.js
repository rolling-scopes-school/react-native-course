import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../assets/colors'
import DrawerNavigator from './DrawerNavigator'
import ProgrammesStackNavigator from './ProgrammesStackNavigator'
import MyLearningStackNavigator from './MyLearningStackNavigator'
import { tabs } from './routes'

const Tab = createBottomTabNavigator()

const tabOptions = ({ route }) => ({
  title: tabs[route.name].title,
  tabBarIcon: ({ focused }) => (
    <Icon
      name={tabs[route.name].iconName}
      size={20}
      color={focused ? colors.coral : colors.darkGray}
    />
  ),
  headerShown: false,
  tabBarActiveTintColor: colors.coral,
  tabBarInactiveTintColor: colors.darkGray,
})

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Tab.Screen name="ProgrammesStack" component={ProgrammesStackNavigator} />
      <Tab.Screen name="MyLearningStack" component={MyLearningStackNavigator} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

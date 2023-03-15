import * as React from 'react'
import { View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { colors } from '../assets/colors'
import { NavButton } from '../components'
import { Settings } from '../screens'
import HomeStackNavigator from './HomeStackNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerTitleStyle: { color: colors.sharpBlue },
        drawerActiveBackgroundColor: colors.limeGreen,
        drawerLabelStyle: {
          color: colors.graphite,
        },
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={({ navigation }) => ({
          headerLeft: () => (
            <View style={{ paddingHorizontal: 12 }}>
              <NavButton
                onPress={() => navigation.toggleDrawer()}
                iconName="bars"
              />
            </View>
          ),
        })}
      />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

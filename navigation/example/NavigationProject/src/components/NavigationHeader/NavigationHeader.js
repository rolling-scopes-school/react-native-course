import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../assets/colors'
import { styles } from './styles'

export const NavigationHeader = () => {
  return (
    <View style={styles.container}>
      <Icon name={'chevron-left'} size={20} color={colors.darkGray} />
      <Text style={styles.text}>LOGO</Text>
      <Icon name={'chevron-right'} size={20} color={colors.darkGray} />
    </View>
  )
}

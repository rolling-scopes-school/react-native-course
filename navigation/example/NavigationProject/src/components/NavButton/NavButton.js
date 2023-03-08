import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../assets/colors'

export const NavButton = ({ iconName, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={iconName} size={20} color={colors.darkGray} />
    </TouchableOpacity>
  )
}

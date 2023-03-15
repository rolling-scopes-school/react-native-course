import React, { useCallback } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const ListItem = ({ item, onPress }) => {
  const onItemPress = useCallback(() => {
    onPress(item)
  }, [item, onPress])

  return (
    <TouchableOpacity style={styles.item} onPress={onItemPress}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  )
}

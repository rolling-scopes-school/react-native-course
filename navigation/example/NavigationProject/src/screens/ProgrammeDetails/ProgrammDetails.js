import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export const ProgrammeDetails = ({ route, navigation }) => {
  const { params } = route

  useEffect(() => {
    navigation.setOptions({
      title: params.title,
    })
  }, [navigation, params.title])

  return (
    <View style={styles.container}>
      <Text>ProgrammeDetails screen!</Text>
    </View>
  )
}

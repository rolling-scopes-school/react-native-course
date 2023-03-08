import React, { useCallback } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ListItem } from '../../components/ListItem'
import { styles } from './styles'
import { programmesData } from './data'

export const Programmes = () => {
  const navigation = useNavigation()

  const onItemPress = useCallback(
    (item) => {
      navigation.navigate('ProgrammeDetails', { title: item.name })
    },
    [navigation],
  )

  return (
    <ScrollView style={styles.container}>
      {programmesData.map((item) => {
        return <ListItem key={item.id} item={item} onPress={onItemPress} />
      })}
    </ScrollView>
  )
}

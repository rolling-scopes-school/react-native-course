import React, { useEffect } from 'react'
import { View, Text, Alert } from 'react-native'
import { styles } from './styles'

export const MyLearning = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Alert.alert('Excellent Result!', 'You have a good progress!', [
        { text: 'Thanks', onPress: () => console.log('Thanks Pressed') },
      ])
    })

    return unsubscribe
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate('CourseDetails')}>
        My Learning screen!
      </Text>
    </View>
  )
}

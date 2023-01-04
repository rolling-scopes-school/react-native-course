import React, { useCallback } from 'react'
import { View, Text, Pressable } from 'react-native'
import { styles } from './styles'

export const Home = ({ navigation }) => {
  const onSeeAllNewsPress = useCallback(
    () => navigation.navigate('News'),
    [navigation],
  )

  const onSeeProgramDetailsPress = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'BottomTab',
          state: {
            routes: [
              {
                name: 'ProgrammesStack',
                state: {
                  index: 1,
                  routes: [
                    {
                      name: 'Programmes',
                    },
                    {
                      name: 'ProgrammeDetails',
                      params: { title: 'Navigation' },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>News</Text>
        <Text style={styles.link} onPress={onSeeAllNewsPress}>
          All news
        </Text>
      </View>
      <Text style={styles.text}>
        We have added a new course! "Navigation" is already in your program
        list.
      </Text>
      <Pressable style={styles.button} onPress={onSeeProgramDetailsPress}>
        <Text style={styles.buttonText}>See program details</Text>
      </Pressable>
    </View>
  )
}

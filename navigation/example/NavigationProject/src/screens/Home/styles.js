import { StyleSheet } from 'react-native'
import { colors } from '../../assets/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  link: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: colors.brightBlue,
  },
  button: {
    width: '50%',
    padding: 8,
    backgroundColor: colors.brightBlue,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
})

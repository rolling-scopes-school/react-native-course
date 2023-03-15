module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: ['off'],
    'no-shadow': ['off'],
  },
  parserOptions: {
    exclude: ['node_modules'],
  },
  ignorePatterns: ['./node_modules/**'],
}

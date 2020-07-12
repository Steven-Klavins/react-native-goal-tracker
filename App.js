import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.input}>
        <TextInput placeholder="Goal" style={styles.inputContainer} />
        <Button title="ADD" />
      </View>

      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

  inputContainer: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

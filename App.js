import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [goals, setGoals] = useState([])

  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const goalHandler = () => {
    setGoals((currentGoals) => [...goals, enteredGoal])
  }
  return (
    <View style={styles.screen}>
      <View style={styles.input}>
        <TextInput
          placeholder="Goal"
          style={styles.inputContainer}
          onChangeText={inputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={goalHandler} />
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

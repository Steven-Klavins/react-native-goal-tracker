import React, { useState } from 'react'
import GoalItem from './GoalItem'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  return (
    <View style={styles.input}>
      <TextInput
        placeholder="Goal"
        style={styles.inputContainer}
        onChangeText={inputHandler}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
    </View>
  )
}

const styles = StyleSheet.create({
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
export default GoalInput

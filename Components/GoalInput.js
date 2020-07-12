import React, { useState } from 'react'
import GoalItem from './GoalItem'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.input}>
        <TextInput
          placeholder="Goal"
          style={styles.inputContainer}
          onChangeText={inputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
  },

  input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default GoalInput

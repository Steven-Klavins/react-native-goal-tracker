import React, { useState } from 'react'
import GoalItem from './GoalItem'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('')

  const inputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const goalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('')
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
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={goalHandler} />
          </View>
        </View>
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

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },

  button: {
    width: '40%',
  },
})
export default GoalInput

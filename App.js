import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import GoalItem from './Components/GoalItem'
import GoalInput from './Components/GoalInput'
import { StyleSheet, View, Button, FlatList } from 'react-native'

export default function App() {
  const [goals, setGoals] = useState([])
  const [isAddMode, setAddMode] = useState(false)

  const goalHandler = (goalTitle) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ])
    setAddMode(false)
  }

  const deleteHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelHandler = () => {
    setAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add new" onPress={() => setAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={goalHandler}
        onCancel={cancelHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={deleteHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
})

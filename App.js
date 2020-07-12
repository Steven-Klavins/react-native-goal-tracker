import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import GoalItem from './Components/GoalItem'
import GoalInput from './Components/GoalInput'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native'

export default function App() {
  const [goals, setGoals] = useState([])

  const goalHandler = (goalTitle) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ])
  }

  const deleteHandler = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={goalHandler} />

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

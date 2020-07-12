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
      { key: Math.random().toString(), value: goalTitle },
    ])
  }
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={goalHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
})

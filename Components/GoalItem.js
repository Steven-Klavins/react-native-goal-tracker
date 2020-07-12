import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ProgressBarAndroidComponent,
} from 'react-native'

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
})
export default GoalItem

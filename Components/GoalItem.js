import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ProgressBarAndroidComponent,
  TouchableOpacity,
} from 'react-native'

const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.goalItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
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

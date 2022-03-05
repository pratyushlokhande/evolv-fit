import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProgramFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>Extend My Plan</Text>
    </View>
  )
}

export default ProgramFooter

const styles = StyleSheet.create({
  container: {
    width: 349,
    height: 62,
    backgroundColor: "#E9E1F9",
    borderRadius: 10,
    boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.15)",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 20,
      fontStyle: "normal",
  }
});
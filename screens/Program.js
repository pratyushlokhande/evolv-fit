import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import ProgramHeader from './components/ProgramHeader'
import ProgramBody from './components/ProgramBody'
import ProgramFooter from './components/ProgramFooter'

export default function Program({navigation}) {
    return (
      <View style={styles.container}>
        <ProgramHeader navigation={navigation} />
        <ProgramBody />
        <ProgramFooter />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40,
    backgroundColor: '#fff',
  }
})
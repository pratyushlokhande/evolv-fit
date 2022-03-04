import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Card from './components/Card'
export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home
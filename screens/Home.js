import { StyleSheet, View } from 'react-native'
import React from 'react'
import ProgramCard from './components/ProgramCard'
export function Home({navigation}) {
    return (
      <View style={styles.container}>
        <ProgramCard navigation={navigation} />
      </View>
    )
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
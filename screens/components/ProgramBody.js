import { Text, Image, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import Icon from "react-native-vector-icons/Entypo";

export default class ProgramBody extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>About The Program</Text>
        <View style={styles.body}>
          <View style={styles.bodyLeft}>
            <Text style={styles.bodyText}>Personalized Workout</Text>
            <Text style={styles.bodyText}>Personalized Meal Plan</Text>
            <Text style={styles.bodyText}>Analytics</Text>
            <Text style={styles.bodyText}>Daily Catchups</Text>
            <Text style={styles.bodyText}>Leaderboards</Text>
          </View>
          <View style={styles.bodyRight}>
            <Image
              style={styles.bodyImage}
              source={require("../../assets/bicep.png")}
            />
          </View>
        </View>
        <Text style={styles.header}>Details</Text>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <Icon name={"calendar"} size={20} />
            <Text style={styles.footText}>1st Mar - 8th Mar 2021</Text>
          </View>
          <View style={styles.footerContent}>
            <Icon name={"price-tag"} size={20} />
            <Text style={styles.footText}>&#8377; 500 paid</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 40,
    paddingVertical: 55,
  },
  header: {
    fontSize: 24,
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: 20,
  },
  body: {
      marginTop: 30,
      flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bodyLeft: {
    width: "55%",
  },
  bodyText: {
    fontSize: 16,
    fontWeight: 600,
    fontStyle: "normal",
    lineHeight: 30,
  },
  bodyRight: {
    width: "45%",
    height: "100%",
    justifyContent: "center",
    alignItems: "end",
  },
  bodyImage: {
    width: "80%",
    height: "100%",
  },
  footer: {
      marginTop: 20,
      gap: 10
  },
    footerContent: {
        flexDirection: "row",
        gap: 14,
        alignItems: "center",
    },
    footText: {
        fontSize: 20,
        fontWeight: 600,
        lineHeight: 20,
        fontStyle: "normal",
    }
});
import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Icon from "react-native-vector-icons/FontAwesome";
import {Circle} from "react-native-svg";
import { SharedElement } from "react-navigation-shared-element";

export default function ProgramHeader({navigation}) {
    return (
        <SharedElement id="shared" style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.cardHead}>
            <Icon name={"chevron-left"} color={"#000"} size={16} />
            <Text style={styles.cardHeadText}>My Program</Text>
          </TouchableOpacity>
          <View style={styles.cardBody}>
            <View style={styles.cardLeft}>
              <View style={styles.leftContent}>
                <View style={styles.header}>
                  <Image
                    style={styles.headerImage}
                    source={require("../../assets/cardlogo.png")}
                  />
                  <Text style={styles.headerText}>Program</Text>
                </View>
                <View style={styles.body}>
                  <Text style={styles.bodyHead}>7 Day Challenge</Text>
                  <Text style={styles.bodyText}>Get Strong</Text>
                </View>
              </View>
            </View>
            <View style={styles.cardRight}>
              <View style={styles.circle}>
                <View style={styles.circleText}>
                  <View>
                    <Text style={styles.circleTextHead}>5</Text>
                    <Text style={styles.circleTextPower}>th</Text>
                  </View>
                  <Text style={styles.circleTextHead}>Day</Text>
                </View>
              </View>
              <AnimatedCircularProgress
                size={97}
                width={7}
                fill={50}
                tintColor="#4012A4"
                onAnimationComplete={() => console.log("onAnimationComplete")}
                backgroundColor="#cebfee"
                rotation={190}
                style={{ position: "absolute" }}
                renderCap={({ center }) => (
                    <Circle cx={center.x} cy={center.y} r="2" fill="#fff" />
                )}
              />
            </View>
          </View>
        </SharedElement>
    );
  
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 295,
    backgroundColor: "#E8DCFF",
    borderBottomRightRadius: 21,
    borderBottomLeftRadius: 21,
    boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.15)",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 27,
    paddingVertical: 42,
  },
  cardHead: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  cardHeadText: {
      fontSize: 22,
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: 20,
  },
  cardBody: {
    width: "100%",
    height: 178,
    display: "flex",
    flexDirection: "row",
  },
  cardLeft: {
    width: "50%",
    paddingVertical: 27,
  },
  cardRight: {
    width: "50%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  header: {
    flexDirection: "row",
  },
  headerImage: {
    width: 19,
    height: 19,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 600,
    fontStyle: "normal",
    lineHeight: 20,
    marginLeft: 12,
  },
  body: {
    marginTop: "auto",
  },
  bodyHead: {
    fontSize: 20,
    fontWeight: 600,
    fontStyle: "normal",
    lineHeight: 20,
  },
  bodyText: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: 500,
    color: "#242323C9",
    marginTop: 15,
  },
  circle: {
    width: 97,
    height: 97,
    // border: "7px solid #cebfee",
    // borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    textAlign: "center",
  },
  circleTextHead: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 700,
    color: "#242323C9",
    fontStyle: "normal",
  },
  circleTextPower: {
    position: "absolute",
    top: -5,
    right: 0,
    fontSize: 10,
    lineHeight: 20,
    fontWeight: 700,
    color: "#242323C9",
    fontStyle: "normal",
  },
  arc: {
    position: "absolute",
    width: 97,
    height: 97,
    border: "7px solid #4012A4",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    clipPath: "polygon(0 0, 65% 0, 45% 100%, 0% 100%)",
  },
});

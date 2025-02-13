import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeHeader() {
  return (
    <View style={styles.headerContainer}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text style={styles.greetingText}>Hello Shivang</Text>
        <Text style={styles.expenditureText}>Rs. 0</Text>
      </View>

      <View style={styles.medalImageContainer}>
        <Image source={require("@/assets/images/medal.png")}></Image>
        <Text style={styles.positionText}>7th {"\n"} Position</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignContent: "center",
  },
  greetingText: {
    color: "#FFF",
    fontFamily: "Manrope",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "600",
  },
  expenditureText: {
    color: "#FFF",
    fontFamily: "Manrope",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "300",
  },
  medalImageContainer: {},
  positionText: {
    color: "#000",
    fontFamily: "Manrope",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
    top: 50,
    left: 5,
  },
});

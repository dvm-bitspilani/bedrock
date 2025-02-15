import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/utils/dimensionUtils";
import { SignOut } from "phosphor-react-native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useAuth } from "@/context/AuthContext";

export default function HomeHeader() {
  const { setStatus } = useAuth();

  async function logout() {
    try {
      await SecureStore.deleteItemAsync("token");
      setStatus("false");
    } catch (error) {
      console.error(error);
    }
  }

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
        {/* <Text style={styles.expenditureText}>Rs. 0</Text> */}
      </View>
      <TouchableOpacity onPress={logout}>
        <SignOut size={16} />
      </TouchableOpacity>
      {/* <View style={styles.medalImageContainer}>
        <Image source={require("@/assets/images/medal.png")}></Image>
        <Text style={styles.positionText}>7th {"\n"} Position</Text>
      </View> */}
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
    fontSize: moderateScale(24),
    fontStyle: "normal",
    fontWeight: "600",
  },
  expenditureText: {
    color: "#FFF",
    fontFamily: "Manrope",
    fontSize: moderateScale(16),
    fontStyle: "normal",
    fontWeight: "300",
  },
  medalImageContainer: {},
  positionText: {
    color: "#000",
    fontFamily: "Manrope",
    fontSize: moderateScale(16),
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
    top: verticalScale(50),
    left: horizontalScale(5),
  },
});

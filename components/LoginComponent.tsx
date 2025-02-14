import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/utils/dimensionUtils";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginContainer() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LinearGradient
      colors={["#2D2E33", "#17181B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.7, y: 1 }}
      style={styles.loginContainer}
    >
      <Text style={styles.titleText}>BedRock</Text>

      <View style={{ gap: 16, width: "100%", marginTop: 30 }}>
        <LinearGradient
          colors={["#272C38", "#404656"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.97, y: 1 }}
          style={styles.inputContainer}
        >
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#A4A4A4"
            value={username}
            onChangeText={setUsername}
          />
        </LinearGradient>

        <LinearGradient
          colors={["#272C38", "#404656"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.97, y: 1 }}
          style={styles.inputContainer}
        >
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#A4A4A4"
            value={password}
            onChangeText={setPassword}
          />
        </LinearGradient>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push("/home");
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    height: verticalScale(510),
    width: "100%",
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: verticalScale(40),
    paddingHorizontal: horizontalScale(20),
  },
  container: {
    display: "flex",
    paddingHorizontal: horizontalScale(20),
    width: "100%",
    height: "100%",
  },
  titleText: {
    color: "#636775",
    fontFamily: "Rem",
    fontSize: moderateScale(30),
    fontStyle: "normal",
    fontWeight: "300",
  },
  input: {
    height: verticalScale(50),
    width: "100%",
    color: "#A4A4A4",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: moderateScale(20),
    paddingHorizontal: horizontalScale(20),
  },
  inputContainer: {
    width: "100%",
    borderRadius: moderateScale(12),
  },
  button: {
    backgroundColor: "#F39C5D",
    borderRadius: moderateScale(12),
    width: "100%",
    paddingVertical: verticalScale(15),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(40),
  },
  buttonText: {
    color: "black",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: moderateScale(18),
  },
});

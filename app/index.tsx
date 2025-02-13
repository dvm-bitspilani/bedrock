import { Image, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import LoginContainer from "@/components/LoginComponent";

export default function TabOneScreen() {
  return (
    <LinearGradient
      colors={["#F39C5D", "#8D5A36"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Image
        style={styles.burgerImage}
        source={require("@/assets/images/burger.png")}
      ></Image>
      <View style={styles.loginContainer}>
        <LoginContainer />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  loginContainer: {
    height: "auto",
    width: "100%",
    position: "absolute",
    backgroundColor: "transparent",
    bottom: 0,
  },
  burgerImage: {
    position: "absolute",
    width: "100%",
    height: 400,
    top: 70,
    right: 0,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

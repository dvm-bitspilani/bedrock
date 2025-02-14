import LoginContainer from "@/components/LoginComponent";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, View } from "react-native";

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
});

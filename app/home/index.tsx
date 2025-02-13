import { Image, StyleSheet, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import useStore from "@/store/globalStore";
import HomeHeader from "@/components/home/HomeHeader";
import ExploreSection from "@/components/home/ExploreSection";

export default function HomeScreen() {
  const store = useStore();

  return (
    <LinearGradient
      colors={["#2D2E33", "#17181B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <HomeHeader></HomeHeader>
      <ExploreSection></ExploreSection>
        {/* <LeaderboardSection></LeaderboardSection> */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});

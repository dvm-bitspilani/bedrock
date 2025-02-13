import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import HomeHeader from "@/components/home/HomeHeader";
import ExploreSection from "@/components/home/ExploreSection";
import LeaderboardSection from "@/components/home/LeaderboardSection";
import { horizontalScale } from "@/utils/dimensionUtils";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#2D2E33", "#17181B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <HomeHeader></HomeHeader>
        <ExploreSection></ExploreSection>
        <View style={{ height: 20 }}></View>
        <LeaderboardSection></LeaderboardSection>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(24),
  },
});

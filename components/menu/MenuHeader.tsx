import { horizontalScale, moderateScale } from "@/utils/dimensionUtils";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function MenuHeader({
  title,
  count,
}: {
  title: string;
  count: number;
}) {
  return (
    <View style={styles.container}>
      <FontAwesome name="chevron-left" size={24} color="white" />
      <View>
        <Text style={styles.headerTitle}>{title}</Text>
        <Text style={styles.headerSubtitle}>{count} Items</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(40),
  },
  headerTitle: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: moderateScale(36),
    fontStyle: "normal",
    fontWeight: "400",
  },
  headerSubtitle: {
    color: "#F39C5D",
    fontFamily: "Poppins",
    fontSize: moderateScale(20),
    fontStyle: "normal",
    fontWeight: "400",
  },
});

import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/utils/dimensionUtils";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LeaderboardSection() {
  const leaderboardData = [
    { name: "Shivang", winnings: 1000 },
    { name: "Shashvat", winnings: 1000 },
    { name: "Shwetabh", winnings: 1000 },
  ];
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <View>
        <Text style={styles.leaderboardText}>Leaderboard</Text>
        <Text style={styles.descText}>Top 3 share winnings with us</Text>
      </View>

      <View>
        {leaderboardData.map((item, index) => {
          return (
            <LearboardItem
              key={index}
              position={index + 1}
              {...item}
            ></LearboardItem>
          );
        })}
      </View>
    </View>
  );
}

function LearboardItem({
  position,
  name,
  winnings,
}: {
  position: number;
  name: string;
  winnings: number;
}) {
  return (
    <View style={styles.leaderboardItemContainer}>
      <View style={styles.leadingGroup}>
        <Text style={styles.positionText}>{position}.</Text>
        <Text style={styles.positionText}>{name}</Text>
      </View>
      <Text style={styles.winningsText}>Rs. {winnings}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  leaderboardText: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: moderateScale(36),
    fontStyle: "normal",
    fontWeight: 400,
  },
  descText: {
    color: "#F39C5D",
    fontFamily: "Poppins",
    fontSize: moderateScale(20),
    fontStyle: "normal",
    fontWeight: "400",
  },
  leaderboardItemContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#353841",
    borderRadius: moderateScale(20),
    paddingVertical: verticalScale(22),
    paddingHorizontal: horizontalScale(20),
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: verticalScale(20),
  },
  leadingGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: horizontalScale(10),
  },
  positionText: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: moderateScale(20),
    fontStyle: "normal",
    fontWeight: "400",
  },
  winningsText: {
    color: "#F39C5D",
    fontFamily: "Poppins",
    fontSize: moderateScale(14),
    fontStyle: "normal",
    fontWeight: "400",
  },
});

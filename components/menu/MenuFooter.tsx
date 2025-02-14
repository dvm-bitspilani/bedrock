import useStore from "@/store/globalStore";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/utils/dimensionUtils";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MenuFooter() {
  const cart = useStore((state) => state.cartItems);
  return (
    <TouchableOpacity
      onPress={() => router.push("/cart")}
      style={styles.footer}
    >
      <Text style={styles.viewCartText}>View Cart</Text>
      <Text style={styles.itemCount}>{cart.length} items</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopRightRadius: moderateScale(12),
    borderTopLeftRadius: moderateScale(12),
    backgroundColor: "#0D0E10",
    position: "absolute",
    width: "100%",
    bottom: 0,
    paddingBottom: verticalScale(30),
    paddingTop: verticalScale(20),
    paddingHorizontal: horizontalScale(40),
  },
  footerText: {
    color: "#FFF",
    fontSize: moderateScale(18),
  },
  viewCartText: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: moderateScale(20),
    fontStyle: "normal",
    fontWeight: "400",
  },
  itemCount: {
    color: "#F39C5D",
    fontFamily: "Poppins",
    fontSize: moderateScale(14),
    fontStyle: "normal",
    fontWeight: "400",
  },
});

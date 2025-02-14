import useStore from "@/store/globalStore";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/utils/dimensionUtils";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CartFooter() {
  const cart = useStore((state) => state.cartItems);

  const total = cart.reduce(
    (acc, item) => acc + item.menuItem.price * item.quantity,
    0
  );

  const placeOrder = () => {
    console.log("Placing order");
  };

  return (
    <View style={styles.footer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text style={styles.viewCartText}>Your Total</Text>
        <Text style={styles.itemCount}>Rs. {total}</Text>
      </View>
      <TouchableOpacity style={styles.placeOrderButton} onPress={placeOrder}>
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "column",
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
    gap: verticalScale(20),
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
  placeOrderButton: {
    borderRadius: 32,
    backgroundColor: "#353841",
    paddingHorizontal: horizontalScale(116),
    paddingVertical: verticalScale(10),
  },
  placeOrderText: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: moderateScale(20),
    fontStyle: "normal",
    fontWeight: "500",
  },
});

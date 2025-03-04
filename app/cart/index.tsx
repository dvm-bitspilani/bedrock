import CartFooter from "@/components/cart/CartFooter";
import MenuGrid from "@/components/menu/MenuGrid";
import MenuHeader from "@/components/menu/MenuHeader";
import useStore from "@/store/globalStore";
import { horizontalScale } from "@/utils/dimensionUtils";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet } from "react-native";

export default function CartScreen() {
  const cartItems = useStore((state) => state.cartItems);
  const cartMenuItems = cartItems.map((item) => item.menuItem);
  return (
    <LinearGradient
      colors={["#2D2E33", "#17181B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <MenuHeader title="Cart" count={cartMenuItems.length} />
        <MenuGrid menuItems={cartMenuItems} />
      </SafeAreaView>
      <CartFooter />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(24),
  },
});

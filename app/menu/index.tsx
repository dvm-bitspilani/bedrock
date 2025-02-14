import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { horizontalScale } from "@/utils/dimensionUtils";
import { useLocalSearchParams } from "expo-router";
import MenuHeader from "@/components/menu/MenuHeader";
import MenuGrid from "@/components/menu/MenuGrid";
import { MenuItem } from "@/store/globalStore";
import MenuFooter from "@/components/menu/MenuFooter";

export default function MenuScreen() {
  const { type } = useLocalSearchParams();

  const menu: MenuItem[] = [
    {
      name: "Burger",
      price: 10.99,
      id: 1,
      isCombo: true,
    },
    {
      name: "Pizza",
      price: 14.99,
      id: 2,
      isCombo: false,
    },
    {
      name: "Salad",
      price: 8.99,
      id: 3,
      isCombo: false,
    },
    {
      name: "Fries",
      price: 4.99,
      id: 4,
      isCombo: true,
    },
    {
      name: "Soda",
      price: 2.99,
      id: 5,
      isCombo: true,
    },
    {
      name: "Chicken Wings",
      price: 12.99,
      id: 6,
      isCombo: false,
    },
    {
      name: "Tacos",
      price: 11.99,
      id: 7,
      isCombo: true,
    },
    {
      name: "Sandwich",
      price: 9.99,
      id: 8,
      isCombo: false,
    },
    {
      name: "Soup",
      price: 6.99,
      id: 9,
      isCombo: true,
    },
    {
      name: "Dessert",
      price: 5.99,
      id: 10,
      isCombo: false,
    },
  ];

  return (
    <LinearGradient
      colors={["#2D2E33", "#17181B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <MenuHeader title="Special Menu" count={12} />
        <MenuGrid menuItems={menu} />
      </SafeAreaView>
      <MenuFooter />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: horizontalScale(24),
  },
});

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
import MenuFooter from "@/components/menu/MenuFooter";
import useStore, { MenuItem } from "@/store/globalStore";
import { useEffect } from "react";
import { baseUrl, menuEndpoint } from "@/constants/endpoints";
import * as SecureStore from 'expo-secure-store';

export default function MenuScreen() {
  const { type } = useLocalSearchParams();
  const { menuItems, setMenuItems } = useStore();

  useEffect(() => {
    const fetchMenuItems = async () => {
      const token = await SecureStore.getItemAsync("token");
      try {
        const response = await fetch(`${baseUrl}${menuEndpoint}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data: MenuItem[] = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };

    fetchMenuItems();
  }, [setMenuItems]);

  return (
    <LinearGradient
      colors={["#2D2E33", "#17181B"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <MenuHeader title="Special Menu" count={menuItems.length} />
        <MenuGrid menuItems={menuItems} />
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

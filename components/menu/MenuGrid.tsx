import useStore, { MenuItem } from "@/store/globalStore";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/utils/dimensionUtils";
import { FontAwesome } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MenuGrid({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.menuGrid}>
      <FlashList
        data={menuItems}
        renderItem={(item) => (
          <MenuItemCard menuItem={item.item} index={item.index} />
        )}
        numColumns={2}
        estimatedItemSize={163}
      />
    </ScrollView>
  );
}

function MenuItemCard({
  menuItem,
  index,
}: {
  menuItem: MenuItem;
  index: number;
}) {
  const state = useStore();

  const isAdded = state.cartItems.some(
    (item) => item.menuItem.id === menuItem.id
  );

  const quantity = state.cartItems.find(
    (item) => item.menuItem.id === menuItem.id
  )?.quantity;
  return (
    <View
      style={[styles.cardContainer, { marginRight: index % 2 === 1 ? 10 : 0 }]}
    >
      <View style={{ gap: verticalScale(9) }}>
        <Text style={styles.itemName}>{menuItem.name}</Text>
        <Text style={styles.itemPrice}>Rs. {menuItem.price}</Text>
      </View>
      {!isAdded ? (
        <TouchableOpacity
          style={styles.addItemButton}
          onPress={() => state.incrementItemQuantity(menuItem)}
        >
          <Text style={styles.addItemText}>Add Item</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.manageItemRow}>
          <TouchableOpacity
            onPress={() => state.decrementItemQuantity(menuItem)}
            style={styles.cartButton}
          >
            <FontAwesome name="minus" color={"white"} />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => state.incrementItemQuantity(menuItem)}
            style={styles.cartButton}
          >
            <FontAwesome name="plus" color={"white"} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  menuGrid: {
    display: "flex",
    flexDirection: "column",
  },
  cardContainer: {
    borderRadius: moderateScale(20),
    backgroundColor: "#353841",
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(16),
    gap: verticalScale(6),
    marginTop: verticalScale(20),
    justifyContent: "space-between",
    minHeight: verticalScale(160),
    width: horizontalScale(180),
  },
  itemName: {
    color: "#F3F3F3",
    fontFamily: "Poppins",
    fontSize: moderateScale(20),
    fontStyle: "normal",
    fontWeight: "400",
  },
  itemPrice: {
    color: "#F39C5D",
    fontFamily: "Poppins",
    fontSize: moderateScale(16),
    fontStyle: "normal",
    fontWeight: "400",
  },
  addItemButton: {
    backgroundColor: "black",
    paddingVertical: verticalScale(9),
    alignItems: "center",
    width: "100%",
    borderRadius: moderateScale(32),
  },
  addItemText: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: moderateScale(14),
    fontStyle: "normal",
    fontWeight: "400",
  },
  manageItemRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityText: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: moderateScale(16),
    fontStyle: "normal",
    fontWeight: "400",
  },
  cartButton: {
    backgroundColor: "black",
    height: verticalScale(40),
    width: horizontalScale(40),
    borderRadius: moderateScale(40),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

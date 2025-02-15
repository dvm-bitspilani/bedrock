import React, { useState } from 'react';
import useStore from "@/store/globalStore";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/utils/dimensionUtils";
import AllInOneSDKManager from 'paytm_allinone_react-native';
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { baseUrl, placeOrderEndpoint } from '@/constants/endpoints';

export default function CartFooter() {
  const cart = useStore((state) => state.cartItems);
  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (acc, item) => acc + item.menuItem.base_price * item.quantity,
    0
  );

  const placeOrder = async () => {
    setLoading(true);
    const items = cart.map(item => ({
      item_class_id: item.menuItem.id,
      quantity: item.quantity
    }));

    try {
      const auth = await SecureStore.getItemAsync('token');
      const response = await fetch(baseUrl + placeOrderEndpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items })
      });

      if (!response.ok) {
        console.log(await response.json());
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      // Handle the data as needed
      //   const auth = await SecureStore.getItemAsync('token');
    //   const response = await fetch('https://bedrock.bits-dvm.org/wallet/monetary/paytm/get_checksum/', {
    //     method: 'POST',
    //     headers: {
    //       'Authorization': `Bearer ${auth}`
    //     }
    //   });
    //   if (!response.ok) {
    //     console.log(await response.json());
    //     throw new Error('Network response was not ok');
    //   }
    //   const data = await response.json();
    //   console.log(data);
    //   // Handle the data as needed
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // } finally {
    //   setLoading(false);
    // }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }

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
      <TouchableOpacity style={styles.placeOrderButton} onPress={placeOrder} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text style={styles.placeOrderText}>Place Order</Text>
        )}

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

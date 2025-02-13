import RightArrow from "@/assets/images/arrow";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

const images = new Map<string, ImageSourcePropType>([
  ["food1", require("@/assets/images/food1.png")],
]);

export default function ExploreSection() {
  return (
    <View style={styles.exploreContainer}>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <View>
          <Text style={styles.exploreText}>Explore</Text>
          <Text style={styles.productText}>Products</Text>
        </View>

        <View style={styles.productList}>
          <ProductItem title="Special Menu" itemCount={12} image="food1" />
          <ProductItem title="Combos" itemCount={5} image="food1" />
        </View>
      </View>
    </View>
  );
}

const ProductItem = ({
  title,
  itemCount,
  image,
}: {
  title: string;
  itemCount: number;
  image: string;
}) => {
  return (
    <View style={styles.productBoxContainer}>
      <Image style={styles.productImage} source={images.get(image)} />
      <View style={styles.productBox}>
        <Text style={styles.productTitle}>{title}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.productItemCount}>{`${itemCount} items`}</Text>
          <View style={styles.button}>
            <RightArrow />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exploreContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    alignContent: "center",
  },
  exploreText: {
    color: "#FFF",
    fontFamily: "Poppins",
    fontSize: 36,
    fontStyle: "normal",
    fontWeight: 400,
  },
  productText: {
    color: "#F39C5D",
    fontFamily: "Poppins",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
  },
  productList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  productBoxContainer: {
    display: "flex",
    flex: 1,
  },
  productBox: {
    borderRadius: 20,
    backgroundColor: "#353841",
    paddingTop: 40,
    paddingLeft: 12,
    paddingRight: 6,
    paddingBottom: 6,
    marginTop: 140,
  },
  productTitle: {
    color: "#F3F3F3",
    fontFamily: "Poppins",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
  },
  productItemCount: {
    color: "#F3F3F3",
    fontFamily: "Poppins",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  button: {
    display: "flex",
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    position: "absolute",
    zIndex: 2,
    top: 0,
  },
});

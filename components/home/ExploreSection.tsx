import RightArrow from "@/assets/images/arrow";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/utils/dimensionUtils";
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
    fontSize: moderateScale(36),
    fontStyle: "normal",
    fontWeight: 400,
  },
  productText: {
    color: "#F39C5D",
    fontFamily: "Poppins",
    fontSize: moderateScale(20),
    fontStyle: "normal",
    fontWeight: "400",
  },
  productList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: horizontalScale(12),
  },
  productBoxContainer: {
    display: "flex",
    flex: 1,
  },
  productBox: {
    borderRadius: moderateScale(20),
    backgroundColor: "#353841",
    paddingTop: verticalScale(40),
    paddingLeft: horizontalScale(12),
    paddingRight: horizontalScale(6),
    paddingBottom: verticalScale(6),
    marginTop: verticalScale(140),
  },
  productTitle: {
    color: "#F3F3F3",
    fontFamily: "Poppins",
    fontSize: moderateScale(20),
    fontStyle: "normal",
    fontWeight: "400",
  },
  productItemCount: {
    color: "#F3F3F3",
    fontFamily: "Poppins",
    fontSize: moderateScale(16),
    fontStyle: "normal",
    fontWeight: "400",
  },
  button: {
    display: "flex",
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(40),
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    position: "absolute",
    zIndex: 2,
    top: 0,
    height: verticalScale(175),
    width: horizontalScale(175),
  },
});

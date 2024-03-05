import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import React, { useEffect } from "react";
import { IShop } from "@/types";
import SectionHeader from "./SectionHeader";
import { Colors, ScreenWidth } from "@/constants";
import { useNavigation } from "@react-navigation/native";

const ShopList = ({ shop }: { shop: IShop[] }) => {
  const navigation = useNavigation();

  const handleProduct = (shop: any) => {
    navigation.navigate("Product_List",{data:shop});
  };
  return (
    <View
      style={{
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SectionHeader primary heading="Shop's near you " />
      {/* Shop Card  */}
      {shop &&
        shop.map((shop: IShop, index: number) => (
          <View key={index} style={styles.shopBox}>
            {/* Shop Image */}
            <Image
              style={styles.shopImg}
              source={shop.image === "" ? require("../../../assets/images/shop.png") :{uri:shop.image}}
            />

            {/* Shop details  */}

            <View
              style={{
                width: "100%",
                backgroundColor: "#f6f6f5",

                borderRadius: 6,
                paddingHorizontal: 8,
                paddingVertical: 8,
              }}
            >
              {/* Shop Name  */}
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    fontFamily: "IBM_Regular",
                    fontWeight: "600",
                  }}
                >
                  {shop.name}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "IBM_Regular",
                    fontWeight: "600",
                  }}
                >
                  {shop.products.length} Products
                </Text>
              </View>
              {/* Shop Address  */}
              <Text style={{ color: Colors.Primary }}>{shop.address}</Text>

              {/* Shop Description  */}
              <Text style={{ color: "#666", fontFamily: "IBM_Regular" }}>
                {shop.description.substring(0, 50)}...
              </Text>
            </View>
            {/* CTA Button  */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 4,
                width: "100%",
                marginTop: 8,
              }}
            >
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  borderWidth: 2,
                  borderColor: Colors.Primary,
                }}
                onPress={()=> Linking.openURL(shop.website)}
              >
                <Text style={{ fontFamily: "IBM_Semibold" }}>Visit Shop</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: Colors.Primary,
                }}
                onPress={() => handleProduct(shop)}
              >
                <Text
                  style={{ fontFamily: "IBM_Semibold", color: Colors.White }}
                >
                  Visit Products
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </View>
  );
};

export default ShopList;

const styles = StyleSheet.create({
  shopBox: {
    width: ScreenWidth * 0.88,
    borderWidth: 1,
    borderColor: Colors.Primary,
    padding: 4,
    borderRadius: 8,
    marginVertical: 15,
  },
  shopImg: { width: "100%", height: 150, resizeMode: "stretch", borderRadius:6 },
  detailBox: {
    width: "100%",
    backgroundColor: Colors.Gray,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: "48%",
    borderRadius: 8,
  },
});

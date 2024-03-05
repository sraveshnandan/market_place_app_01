import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, defaultStyles } from "@/constants";
import { ImageSlider, ImageSliderBox, SectionHeader } from "@/components";
import { Ionicons } from "@expo/vector-icons";
import { Iproduct } from "@/types";
import { calculatePresentage } from "@/utils";

const ProductDetails = ({ route, navigation }) => {
  const p: Iproduct = route.params.details;
  console.log("Product Details Page: ", p);
  return (
    <SafeAreaView style={defaultStyles.container}>
      {/* Top Navigation box  */}
      <View style={defaultStyles.navigationSection}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="chevron-back-outline"
          size={28}
          color={Colors.Primary}
        />
        <SectionHeader heading={`${p.name.substring(0,20)}...`} primary />
      </View>

      {/* Product Image  */}
      {/* <Image
        style={{
          width: "100%",
          height: 220,
          backgroundColor: Colors.Gray,
          marginVertical: 10,
          resizeMode: "contain",
          borderRadius: 10,
          
        }}
        source={p.images.length <= 0 ? require("../../assets/images/bag.png"):{uri:p.images[0]}}
      /> */}

      <ImageSliderBox images={p.images}/>

      {/* Product Details  */}
      <View style={{ width: "100%" }}>
        <Text
          style={{ fontFamily: "IBM_Regular", fontSize: 25, marginBottom: 10 }}
        >
          {p.name}
        </Text>
          {/* Product Price  */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
          <Text style={{ fontSize: 28 }}>₹{p.original_price}</Text>
          <Text
            style={{
              textDecorationLine: "line-through",
              color: Colors.Red,
              fontSize: 18,
            }}
          >
            ₹{p.discount_price}
          </Text>
          <Text style={{ color: Colors.Green, fontSize: 16 }}>
            {calculatePresentage(p.original_price, p.discount_price)} % OFF
          </Text>
        </View>
        {/* Product Description  */}
        <View>
          <Text style={{fontFamily:"IBM_Semibold", fontSize:24, marginBottom:10}}>Description</Text>
          <Text style={{color:"#444"}}>{p.description.substring(0,150)}...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});

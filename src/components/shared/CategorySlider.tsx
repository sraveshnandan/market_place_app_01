import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { ICategories, IShop } from "@/types";
import { Colors } from "@/constants";
import { useNavigation } from "@react-navigation/native";

const CategorySlider = ({
  categories,
  shop,
}: {
  categories: ICategories[];
  shop: IShop;
}) => {
  const navigation = useNavigation();
  const handleCategoryClick = (item) => {
    navigation.navigate("Product_Page", { shop: shop, category: item.name });
    console.log(`Category Item Clicked :${item.name}`);
  };
  return (
    <View style={{ maxHeight: 160 }}>
      <Text style={{ fontSize: 24, fontFamily: "IBM_Semibold", marginTop: 10 }}>
        Categories
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width: "100%", marginVertical: 10 }}
      >
        {categories &&
          categories.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleCategoryClick(item)}
              key={index}
              style={{
                alignItems: "center",
                justifyContent: "center",
                maxHeight: 90,
                width: 130,
                gap: 4,
              }}
            >
              <Image
                style={{
                  width: 65,
                  height: 65,
                  resizeMode: "contain",
                  backgroundColor: Colors.Secondry,
                  borderRadius: 55,
                }}
                source={
                  item.icon === ""
                    ? require("../../../assets/images/women.png")
                    : { uri: item.icon }
                }
              />
              <Text>{item.name}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default CategorySlider;

const styles = StyleSheet.create({});

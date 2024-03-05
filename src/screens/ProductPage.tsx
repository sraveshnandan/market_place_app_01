import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, defaultStyles } from "@/constants";
import { ProductList, SearchBar, SectionHeader } from "@/components";
import { Ionicons } from "@expo/vector-icons";
import { Iproduct } from "@/types";

const ProductPage = ({ route, navigation }) => {
  const [searchquery, setSearchquery] = useState<string>("");
  const shop = route.params.shop;
  const category = route.params.category;
  const PList = shop.products.filter(
    (item:Iproduct) => item.Category.toString() === category.toString()
  );
  console.log(PList);
  console.log(`Products LIst ${JSON.stringify(PList)}`);
  useEffect(() => {
    console.log(searchquery);
  }, [searchquery]);
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
        <SectionHeader heading={`${category}`} primary />
      </View>
      {/* Search Bar  */}

     <SearchBar searchquery={searchquery} setSearchquery={setSearchquery}/>

      {/* Main Layout   */}
      <ScrollView
        style={{ flexDirection: "row", flexWrap: "wrap", width: "100%" }}
      >
        <ProductList products={PList} title="" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductPage;

const styles = StyleSheet.create({});

import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, defaultStyles } from "@/constants";
import { CategorySlider, ProductList, SectionHeader } from "@/components";
import { Ionicons } from "@expo/vector-icons";

const ProductPage = ({ route, navigation }: any) => {
  useEffect(() => {
    console.log(route.params);
  }, []);
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
        <SectionHeader heading={`${route.params.data.name}`} primary />
      </View>

      {/* Category Slider  */}
      <CategorySlider categories={route.params.data.Categories} shop={route.params.data} />

      {/* Product List  */}
      <ProductList products={route.params.data.products} title={`All Products`}/>
      
    </SafeAreaView>
  );
};

export default ProductPage;

const styles = StyleSheet.create({});

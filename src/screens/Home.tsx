import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Categories, SliderData, defaultStyles, shop } from "@/constants";
import { CategoryBox, Header, ImageSlider, ShopList } from "@/components";

const Home = () => {
  return (
    <SafeAreaView style={defaultStyles.container}>
      {/* Header Section  */}
      <Header />
      {/* ScrollView Section  */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Slider Section  */}
        <ImageSlider data={SliderData} />
        {/* Category Section  */}
        <CategoryBox category={Categories} />
        {/* Shop List Section  */}
        <ShopList shop={shop}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

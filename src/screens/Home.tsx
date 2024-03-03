import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SliderData, defaultStyles } from "@/constants";
import { Header, ImageSlider } from "@/components";

const Home = () => {
  return (
    <SafeAreaView style={defaultStyles.container}>
      {/* Header Section  */}
      <Header/>
      {/* Slider Section  */}
      <ImageSlider data={SliderData}/>
      {/* Category Section  */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

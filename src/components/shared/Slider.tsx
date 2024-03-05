import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ISlider } from "@/types";
import { Colors, ScreenHeight, ScreenWidth } from "@/constants";
import { ScrollView } from "react-native";

const Slider = ({ data }: { data: ISlider[] }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ width: ScreenWidth * 0.95, paddingVertical: 10, maxHeight: 210 }}
    >
      {data &&
        data.map((item, index) => (
          <View key={index} style={styles.sliderContainer}>
            <Image source={item.icon} style={styles.sliderImage} />
          </View>
        ))}
    </ScrollView>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderContainer: {
    width: ScreenWidth * 0.9,
    position: "relative",
    height: 190,
    marginRight: 5,
  },
  sliderImage: {
    resizeMode: "contain",
    height: 190,
    width: ScreenWidth * 0.9,
    borderRadius: 8,
    backgroundColor: Colors.Gray,
  },
});

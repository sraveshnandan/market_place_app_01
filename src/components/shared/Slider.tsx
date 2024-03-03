import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ISlider } from "@/types";
import { Colors, ScreenWidth } from "@/constants";

const Slider = ({ data }: { data: ISlider[] }) => {
  return (
    <FlatList
      style={{ width: "auto", marginTop:10, borderRadius:8}}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      snapToStart
      data={data}
      renderItem={({ item, index }) => (
        <View style={{width:ScreenWidth*1.1, backgroundColor:Colors.LightBlue, height:200, alignItems:"center", justifyContent:"center", overflow:"hidden"}}>
            
        </View>
      )}
    />
  );
};

export default Slider;

const styles = StyleSheet.create({});

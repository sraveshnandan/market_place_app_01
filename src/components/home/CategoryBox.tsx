import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ICategories } from "@/types";
import SectionHeader from "../shared/SectionHeader";
import { Colors } from "@/constants";

const CategoryBox = ({ category }: { category: ICategories[] }) => {
  return (
    <View style={{ width: "100%", maxHeight:265, overflow:"hidden" , marginVertical:10, }}>
      <SectionHeader heading="Categories" primary/>
      {/* Category Box  */}
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginVertical:16}}>
      {category &&
        category.slice(0,4).map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryBox}
          >
            <Image
              style={{ width:65, height: 65, backgroundColor:Colors.Gray, resizeMode:"contain", padding:10, borderRadius:12 }}
              source={{uri:item.icon}}
            />
            <Text style={{fontFamily:"IBM_Regular", fontWeight:"600", fontSize:16, marginTop:5}}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
       {/* Category Box  */}
       <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center", marginVertical:16}}>
      {category &&
        category.slice(5,9).map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryBox}
          >
            <Image
              style={{ width:65, height: 65, backgroundColor:Colors.Gray, resizeMode:"contain", padding:10, borderRadius:12 }}
              source={{uri:item.icon}}
            />
            <Text style={{fontFamily:"IBM_Regular", fontWeight:"600", fontSize:16, marginTop:5}}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CategoryBox;

const styles = StyleSheet.create({
  categoryBox:{
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
  }
});

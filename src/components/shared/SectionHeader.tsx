import { View, Text, StyleSheet } from "react-native";
import React from "react";

const SectionHeader = ({heading, primary}:{heading:string, primary:boolean}) => {

  return (
    <Text
      style={styles.heading}
    >
      {heading}
    </Text>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  heading:{
    alignSelf: "center",
        fontFamily: "IBM_Regular",
        fontSize: 24,
        fontWeight: "600",
  }
})

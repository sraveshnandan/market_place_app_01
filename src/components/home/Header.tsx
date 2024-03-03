import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants";
import {
  Ionicons,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{
        width: "auto",
        flexDirection: "row",
        backgroundColor: Colors.Gray,
        justifyContent: "space-between",
        marginHorizontal: -15,
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      {/* LOGO  */}
      <View style={styles.container}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={{ width: 35, height: 35 }}
        />
        <Text
          style={{
            color: Colors.Primary,
            fontFamily: "IBM_Regular",
            fontSize: 22,
          }}
        >
          Online Market
        </Text>
      </View>
      {/* Right Icons  */}
      <View style={styles.container}>
        <TouchableOpacity>
        <MaterialCommunityIcons name="bell-badge" style={{marginRight:10}}  size={26}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <MaterialCommunityIcons name="phone-outline"  size={26}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});

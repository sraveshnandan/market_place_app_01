import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { Iproduct } from "@/types";
import { Colors, ScreenHeight, ScreenWidth } from "@/constants";
import { calculatePresentage } from "@/utils";
import { useNavigation } from "@react-navigation/native";

const ProductList = ({
  products,
  title,
}: {
  products: Iproduct[];
  title: string;
}) => {
  const navigation = useNavigation()

  const handleClick =(product)=>{
      navigation.navigate("Product_Details", {details:product});
  }

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontSize: 24, fontFamily: "IBM_Semibold" }}>{title}</Text>
      {/* Product Container  */}
      <View
        style={{
          maxWidth: ScreenWidth*1,
          flexWrap:"wrap",
          flexDirection:"row",
          justifyContent: "flex-start",
          alignItems:"flex-start",
          paddingVertical: 15,
         gap:4
        }}
      >
        {products  && products.length >0 ?
          products.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: ScreenWidth * 0.45,
                padding: 4,
                marginVertical:10
              }}
              onPress={()=> handleClick(item)}
            >
              <Image
                style={{
                  width: "100%",
                  height: 120,
                  borderRadius: 8,
                  resizeMode: "contain",
                  backgroundColor: Colors.Gray,
                }}
                source={item.images.length <0 ? require("../../../assets/images/bag.png"):{uri:item.images[0]}}
              />
              {/* Product Details  */}
              <Text
                style={{
                  fontFamily: "IBM_Semibold",
                  marginVertical: 8,
                  fontSize: 14,
                }}
              >
                {item.name}
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Text style={{ fontSize: 16 }}>₹{item.original_price}</Text>
                <Text
                  style={{
                    textDecorationLine: "line-through",
                    color: Colors.Red,
                    fontSize:12
                  }}
                >
                  ₹{item.discount_price}
                </Text>
                <Text style={{color:Colors.Green}}>
                  {calculatePresentage(

                    item.original_price,
                    item.discount_price
                  )} % 
                </Text>
              </View>
            </TouchableOpacity>
          )):(
            <View style={{width:ScreenWidth, height:ScreenHeight*0.89 ,alignItems:"center", justifyContent:"center", }}>
              <Text style={{fontSize:64, marginVertical:5}}>😕</Text>
              <Text style={{fontSize:26, fontFamily:"IBM_Regular"}}>No Products found.</Text>
              <Text style={{color:"#444"}}>No products found,in this category yet.</Text>
            </View>
          )
        
        }
      </View>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});

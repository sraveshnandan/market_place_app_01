import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  CartScreen,
  CategoryScreen,
  HomeScreen,
  ProfileScreen,
  ShopScreen,
} from "@/screens";
import { Colors } from "@/constants";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();
const BottomTabs = () => {
  const [isMerchant, setIsMerchant] = useState<boolean>(false);
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.Primary,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={
                focused
                  ? "card-bulleted-settings"
                  : "card-bulleted-settings-outline"
              }
              size={28}
              color={color}
            />
          ),
        }}
      />
      {isMerchant && (
        <Tabs.Screen
          name="Shop"
          component={ShopScreen}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "office-building" : "office-building-outline"}
                size={28}
                color={color}
              />
            ),
          }}
        />
      )}
      <Tabs.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "shopping" : "shopping-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person-circle-sharp" : "person-circle-sharp"}
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;

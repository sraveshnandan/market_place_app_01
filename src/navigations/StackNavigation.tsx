import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen, ProductDetailsPage, ProductList, ProductPage, RegisterScreen, forgotPassword } from "@/screens";
import BottomTabs from "./BottomTabs";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false,  }}>
        {/* Auth Screens  */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forgot_password" component={forgotPassword} />
        {/* Basic Screens  */}
        <Stack.Screen name="Product_List" component={ProductList}/>
        <Stack.Screen name="Product_Page" component={ProductPage}/>
        <Stack.Screen name="Product_Details" component={ProductDetailsPage}/>
        {/* Bottom Tabs Navigations  */}
        <Stack.Screen name="Main" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

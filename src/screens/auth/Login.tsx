import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, defaultStyles } from "@/constants";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  // handle login function
  const handleLogin = () => {
    if (email=== "" || password === "") {
      Alert.alert("Input Error", "Please fill all details.")
    }
    setIsLoggedIn(true)
    
  };

  useEffect(()=>{
    isLoggedIn ? navigation.navigate("Main" as never) : null
  },[isLoggedIn])

  return (
    <SafeAreaView style={defaultStyles.container}>
      {/* Logo Section  */}
      <View style={styles.hContainer}>
        <Image
          style={defaultStyles.authLogo}
          source={require("../../../assets/images/logo.png")}
        />
      </View>
      {/* Form Wrapper  */}
      <View style={{backgroundColor:Colors.White,padding:16, height:"60%", borderRadius:10}}>
        {/* Banner  */}
        <Text
          style={{
            fontFamily: "IBM_Regular",
            color: Colors.Primary,
            fontSize: 38,
            fontWeight: "600",
          }}
        >
          Welcome Back 👋
        </Text>

        {/* Login Form  */}
        <KeyboardAvoidingView style={{ marginVertical: 20, gap: 15 }}>
          {/* Input Box  */}
          <View style={defaultStyles.input_box}>
            <Ionicons name="mail" size={30} />
            <TextInput
              onChangeText={(value) => setEmail(value)}
              style={defaultStyles.input}
              placeholder="Enter your email..."
              spellCheck={true}
            />
          </View>
          {/* Input Box  */}
          <View style={defaultStyles.input_box}>
            <Ionicons name="lock-closed" size={30} />
            <TextInput
              onChangeText={(value) => setPassword(value)}
              style={defaultStyles.input}
              secureTextEntry={true}
              placeholder="Enter your password..."
            />
          </View>

          {/* Forgot Password Section  */}
          <View style={{ width: "100%" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Forgot_password" as never)}
              style={{ alignSelf: "flex-end" }}
            >
              <Text style={{ fontSize: 18, color: Colors.Primary }}>
                forgot password
              </Text>
            </TouchableOpacity>
          </View>

          {/* Login Button  */}
          <TouchableOpacity onPress={handleLogin} style={defaultStyles.btn}>
            <Text style={defaultStyles.btnText}>Login</Text>
          </TouchableOpacity>

          {/* Exta Sections  */}
          <Text
            style={{ alignSelf: "center", fontSize: 19, marginVertical: 15 }}
          >
            Don't have an account?
            <TouchableOpacity
              onPress={() => navigation.navigate("Register" as never)}
            >
              <Text
                style={{ color: Colors.Primary, fontSize: 22, marginLeft: 10 }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </Text>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  hContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
  },
});

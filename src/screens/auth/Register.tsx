import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, defaultStyles } from "@/constants";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleRegister = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <SafeAreaView style={defaultStyles.container}>
      {/* Logo Section  */}
      <View style={styles.hContainer}>
        <Image
          style={defaultStyles.authLogo}
          source={require("../../../assets/images/bag.png")}
        />
      </View>
      {/* Form Wrapper  */}
      <View
        style={{
          backgroundColor: Colors.White,
          padding: 16,
          height: "60%",
          borderRadius: 10,
        }}
      >
        {/* Banner  */}
        <Text
          style={{
            fontFamily: "IBM_Regular",
            color: Colors.Primary,
            fontSize: 36,
            fontWeight: "600",
          }}
        >
          Register Yourself 😎
        </Text>

        {/* Login Form  */}
        <KeyboardAvoidingView style={{ marginVertical: 20, gap: 15 }}>
          {/* Input Box  */}
          <View style={defaultStyles.input_box}>
            <Ionicons name="person-sharp" size={30} />
            <TextInput
              onChangeText={(value) => setName(value)}
              style={defaultStyles.input}
              placeholder="Enter your name..."
              spellCheck={true}
            />
          </View>
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

          

          {/* Login Button  */}
          <TouchableOpacity onPress={handleRegister} style={defaultStyles.btn}>
            <Text style={defaultStyles.btnText}>Register</Text>
          </TouchableOpacity>

          {/* Exta Sections  */}
          <Text
            style={{ alignSelf: "center", fontSize: 19, marginVertical: 15 }}
          >
            Already have an account?
            <TouchableOpacity
              onPress={() => navigation.navigate("Login" as never)}
            >
              <Text
                style={{ color: Colors.Primary, fontSize: 22, marginLeft: 10 }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </Text>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  hContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
  },
});

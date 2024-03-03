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
const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const handleSubmit = () => {
    navigation.navigate("Login" as never);
  };

  return (
    <SafeAreaView style={defaultStyles.container}>
      {/* Top Navigation box  */}
      <View style={defaultStyles.navigationSection}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="chevron-back-outline"
          size={28}
          color={Colors.Primary}
        />
        <Text style={defaultStyles.navigationHeader}>Reset your password</Text>
      </View>

      {/* Logo Section  */}
      <View style={styles.hContainer}>
        <Image
          style={defaultStyles.authLogo}
          source={require("../../../assets/images/shop.png")}
        />
      </View>

      {/* Form Container Box  */}
      <KeyboardAvoidingView style={{ flex: 1, gap: 15 }}>
        <Text
          style={{
            fontSize: 30,
            color: Colors.Primary,
            fontFamily: "IBM_Regular",
          }}
        >
          Reset your password 🔐
        </Text>
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
        <TouchableOpacity onPress={handleSubmit} style={defaultStyles.btn}>
          <Text style={defaultStyles.btnText}>Reset Password</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  hContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "30%",
  },
});

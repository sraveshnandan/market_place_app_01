import { Dimensions, StyleSheet } from "react-native";
import Colors from "./Colors";

 export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;
export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: ScreenWidth * 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.White,
  },
  authLogo: {
    width: ScreenWidth * 0.4,
    height: 150,
    resizeMode: "contain",
    backgroundColor: Colors.Gray,
    borderRadius: 10,
    shadowColor: Colors.Primary,
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 6 },
  },
  btn: {
    backgroundColor: Colors.Primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical:12,
    borderRadius:8
  },
  btnText: {
    color: Colors.White,
    fontFamily: "IBM_Regular",
    fontSize:28
  },
  input_box: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: Colors.Gray,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontFamily: "IBM_Semibold",
    width: "100%",
    height: "100%",
    backgroundColor:Colors.Gray
  },
  navigationSection: {
    width: "auto",
    flexDirection: "row",
    backgroundColor: Colors.Gray,
    alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal: -15,
    paddingVertical: 15,
    gap: 20,
  },
  navigationHeader: {
    fontSize: 24,
    fontFamily: "IBM_Regular",
  },
});

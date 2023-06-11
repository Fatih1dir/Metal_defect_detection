import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  preview: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  plot: {
    flex: 1,
    alignSelf: "stretch",
    width: undefined,
    height: undefined,
  },
});

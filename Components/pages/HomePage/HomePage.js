import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./HomePage.style";
import Button from "../../Button/Button";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centered}>
        <Text>Take Picture</Text>
        <Button iconName={"camera-outline"} size={50} onPress={()=> navigation.navigate("CameraPage")}></Button>
        <Text>Load Image</Text>
        <Button iconName={"image-outline"} size={50} onPress={()=> navigation.navigate("LoadImagePage")}></Button>
      </View>
    </SafeAreaView>
  );
}

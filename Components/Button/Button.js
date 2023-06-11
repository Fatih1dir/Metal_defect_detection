import React from "react";
import { TouchableOpacity, View } from "react-native";
import {Ionicons} from "@expo/vector-icons";

const Button = ({onPress,iconName,size,color}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name={iconName} size={size} color={color}></Ionicons>
      </TouchableOpacity>
    </View>
  );
};
export default Button;

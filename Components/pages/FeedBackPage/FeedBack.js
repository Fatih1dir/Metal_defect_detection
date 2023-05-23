import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./FeedBack.style";
import Button from "../../Button/Button";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FeedBack() {
  const [text, onChangeText] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your feedback..."
        multiline
      />
      <View style={styles.buttonContainer}>
        <Text style={styles.textStyle}>Add an image(optional)</Text>
        <Button iconName={"camera-outline"} size={40}></Button>
      </View>
      <View style={styles.sendFeedbackBtnContainer}>
        <TouchableOpacity style={styles.sendFeedbackBtn}>
          <Text style={styles.textStyle}>Send FeedBack</Text>
          <View style={styles.sendIconContainer}>
            <Ionicons name="send-outline" size={20}></Ionicons>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

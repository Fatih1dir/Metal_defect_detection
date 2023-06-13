import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./FeedBack.style";
import Button from "../../Button/Button";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { sendEmail } from '../sendFeedback';

export default function FeedBack() {
  const [text, onChangeText] = useState("");
  const handleFeedback =()=>{
    sendEmail(
      'ceng.fatih1dir@gmail.com',
         'We need your feedback',
          text,
   { cc: '' }
  ).then(() => {
      console.log('Your message was successfully sent!');
  });
  }
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your feedback..."
        multiline
      />
      <View style={styles.sendFeedbackBtnContainer}>
        <TouchableOpacity style={styles.sendFeedbackBtn} onPress={()=>handleFeedback()}>
          <Text style={styles.textStyle}>Send FeedBack</Text>
          <View style={styles.sendIconContainer}>
            <Ionicons name="send-outline" size={20}></Ionicons>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

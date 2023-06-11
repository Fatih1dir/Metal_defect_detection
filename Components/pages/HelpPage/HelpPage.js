import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import styles from "./HelpPage.style";
import { Ionicons } from "@expo/vector-icons";

export default function HelpPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.helpText}>Frequently Asked Questions</Text>
      <Text style={styles.helpText}>You couldn't find your problem here?</Text>
      <TouchableOpacity style={styles.sendFeedbackBtn} onPress={()=>navigation.navigate('Send Feedback',{screen:'FeedBackPage'})}>
          <Text style={styles.textStyle}>Send FeedBack</Text>
          <View style={styles.sendIconContainer}>
            <Ionicons name="send-outline" size={20}></Ionicons>
          </View>
        </TouchableOpacity>
    </View>
  );
}

import React, { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import axios from "axios";
import styles from "./ScanPage.style";

export default function ScanPage({ route, navigation }) {
  const { imgToScan } = route.params;
  const SERVER_URL = "http://192.168.1.174:19000";
  const [plotData, setPlotData] = useState("");

  useEffect(() => {
    sendImageToAPI(imgToScan);
  }, []);

  async function sendImageToAPI(imageFile) {
    try {
      const response = await axios.post(`${SERVER_URL}/process_image`, {
        image: imageFile.base64,
      });
      setPlotData(response.data.plot);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      {plotData !== "" && (
        <Image style={styles.plot} source={{ uri: `data:image/png;base64,${plotData}` }} />
      )}
    </View>
  );
}

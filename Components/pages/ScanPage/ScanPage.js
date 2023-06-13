import React, { useEffect, useState } from "react";
import { View, Image, Text, Button,Alert } from "react-native";
import axios from "axios";
import styles from "./ScanPage.style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import FlashMessage, { showMessage } from "react-native-flash-message";
import Loading from "../../Loading/Loading";
import Error from "../../Error/Error";

export default function ScanPage({ route, navigation }) {
  const { imgToScan } = route.params;
  const SERVER_URL = "http://192.168.1.174:19000";
  const [plotData, setPlotData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    sendImageToAPI(imgToScan);
  }, []);

  async function sendImageToAPI(imageFile) {
    try {
      const response = await axios.post(`${SERVER_URL}/process_image`, {
        image: imageFile.base64,
      });
      setPlotData(response.data.plot);
      setLoading(false);
      
    } catch (error) {
      setError(true);
    }
  }
  const handleRate=()=>{
    Alert.alert('Help us improve', 'Are you happy with the result?',[
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'No',
        onPress: () => console.log('No Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => console.log('Yes Pressed')},
    ]);
  }

  const handleSave = async (savePlot) => {
    try {
      const id = uuid.v4();; // Generate a unique ID
      await AsyncStorage.setItem(`plots:${id}`, savePlot);
      showMessage({
        message: "Succesfully added",
        type: "success",
      });
    } catch (e) {
      setError(true);
    }
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      {plotData !== "" && (
          <Image style={styles.plot} source={{ uri: `data:image/png;base64,${plotData}` }} />
      )}
      {plotData !== "" && (
      <View style={{flexDirection:"row"}}>
        <Button title="Discard" color={"red"} onPress={()=>navigation.goBack()}></Button>
        <Button title="    Save   " color={"green"} onPress={async()=>handleSave(plotData)}></Button>
        <Button title="    Rate   " color={"blue"} onPress={()=>handleRate()}></Button>
      </View>
      )}
      <FlashMessage position={"top"}></FlashMessage>
    </View>
    
  );
}

import React, { useEffect, useState } from "react";
import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './PrevScans.style'

import Loading from "../../Loading/Loading";
import Error from "../../Error/Error";

const PrevScans = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const imageKeys = keys.filter((key) => key.startsWith("plots:"));
        const imageItems = await AsyncStorage.multiGet(imageKeys);
        const images = imageItems.map(([key, image]) => ({ key, image }));

        setImages(images);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchImages();
  }, [images]); // Include images as a dependency

  const handleDelete = async (imageKey) => {
    try {
      await AsyncStorage.removeItem(imageKey);
      const updatedImages = images.filter((image) => image.key !== imageKey);
      setImages(updatedImages);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {images.map((image, index) => (
          <ImageCard key={index} image={image.image} imageKey={image.key} handleDelete={() => handleDelete(image.key)} />
        ))}
      </ScrollView>
    </View>
  );
};

const ImageCard = ({ image, imageKey, handleDelete }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: `data:image/png;base64,${image}` }} style={styles.image} />
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrevScans;

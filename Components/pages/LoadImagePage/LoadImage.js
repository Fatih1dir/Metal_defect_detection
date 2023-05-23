import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Button, Image} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import styles from './LoadImage.style';

export default function LoadImage() {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  
  if (hasGalleryPermission === false) {
    return <View />;
  }
  return (
    <View style={{ flex: 1}}>
          <Button title="Pick Image From Gallery" onPress={() => pickImage()} />
          {image && <Image source={{uri: image}} style={{flex:1,resizeMode:"contain"}}/>}
    </View>
  );
}
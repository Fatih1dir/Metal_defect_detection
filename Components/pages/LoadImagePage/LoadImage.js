import React, { useState, useEffect } from 'react';
import {SafeAreaView, StyleSheet ,Text, View, Image} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import styles from './LoadImage.style';
import Button from '../../Button/Button';

export default function LoadImage({navigation}) {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
      pickImage();
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      //allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64:true
    });
    
    
    
    if (!result.canceled) {
      
      setImage(result.assets[0]);

      return (
        <SafeAreaView style={styles.container}>
          
        </SafeAreaView>
      );
    }
    
  };
  let scanPic = () => {
    navigation.navigate("ScanPage",{imgToScan:image})
  };
  
  if (hasGalleryPermission === false) {
    return <View />;
  }
  return (
    <View style={styles.container}>
          {image && <Image source={{uri: image.uri}} style={styles.preview}/>}
          <Button style={styles.bottomView} iconName={'logo-electron'} size={40} onPress={scanPic} />
    </View>
  );
}
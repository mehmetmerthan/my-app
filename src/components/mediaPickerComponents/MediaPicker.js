import React, { useState, useEffect } from "react";
import { Button, Image, View, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { uploadMedia } from "./MediaUploader";
import { Auth } from "aws-amplify";

export default function MediaPicker() {

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState(null);

  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      uploadMedia(result.assets[0].uri, setMessage);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      uploadMedia(result.assets[0].uri, setMessage);
    }
  };

  const GetUSerInfo = async () => {
    const userId = await Auth.currentAuthenticatedUser();
    console.log(userId.attributes.sub);
  };

  return (
    <View style={styles.View}>
      <Button title="Pick a Video from gallery" onPress={pickVideo} />
      <View style={styles.buttonSpacing}></View>
      <Button title="Pick a image from gallery" onPress={pickImage} />
      <View style={styles.buttonSpacing}></View>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <View style={styles.buttonSpacing}></View>
      {message && <Text>{message}</Text>}
      <Button title="Get Info" onPress={GetUSerInfo} />
      <View style={styles.buttonSpacing}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSpacing: {
    marginTop: 50,
  },
  View: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

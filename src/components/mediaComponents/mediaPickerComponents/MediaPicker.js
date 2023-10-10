import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { UploadImageToStorage, UploadVideoToStorage } from "./MediaUploader";

export const MediaPicker = ({ postText, selectedTags }) => {
  const [image, setImage] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const [video, setVideo] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const pickVideo = async () => {
    setVideo(null);
    setImage(null);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
      setIsButton(true);
    }
  };

  const pickImage = async () => {
    setVideo(null);
    setImage(null);
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setIsImage(true);
      setIsButton(true);
    }
  };
  const uploadMedia = async () => {
    if (isImage === true) {
      UploadImageToStorage(setIsUploading, image, postText, selectedTags);
    } else {
      UploadVideoToStorage(
        setIsUploading,
        image,
        postText,
        selectedTags,
        video
      );
    }
  };
  return {
    image,
    video,
    pickImage,
    pickVideo,
    isUploading,
    isButton,
    uploadMedia,
  };
};

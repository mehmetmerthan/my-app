import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity,ScrollView } from "react-native";
import { MediaPicker } from "../components/mediaComponents/mediaPickerComponents/MediaPicker";
import VideoPlayer from "../components/mediaComponents/VideoPlayer";
import GetTags from "../Utils/PostUtils/TagUtils/GetTags";
import CreatePoststyles  from "../Styles/CreatePostScreenStyles";
export default function CreatePostScreen() {
  const [postText, setPostText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]); 
  const {
    image,
    video,
    pickImage,
    pickVideo,
    isUploading,
    isButton,
    uploadMedia,
  } = MediaPicker(postText, selectedTags);
  const { styleTags, instrumentTags } = GetTags(); 
  const addTag = (tag) => {
    setSelectedTags([...selectedTags, tag]);
  };
  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };
  function writeTags() {
    console.log(selectedTags);
  }
  return (
    <ScrollView style={CreatePoststyles.container}>
      <TouchableOpacity onPress={pickVideo} style={CreatePoststyles.mediaButton}>
        <Text style={CreatePoststyles.buttonText}>Video Seç</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImage} style={CreatePoststyles.mediaButton}>
        <Text style={CreatePoststyles.buttonText}>Fotoğraf Seç</Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={CreatePoststyles.image} />}
      {video && <VideoPlayer uri={video} style={CreatePoststyles.video} />}

      <TextInput
        placeholder="Bu paylaşım hakkında bir şeyler yazın..."
        onChangeText={(text) => setPostText(text)}
        value={postText}
        style={CreatePoststyles.textInput}
        multiline
      />

      <View style={CreatePoststyles.tagContainer}>
        <Text>Tag Ekle:</Text>
        {styleTags.map((tag) => (
          <TouchableOpacity
            key={tag.id}
            style={[
              CreatePoststyles.tag,
              selectedTags.includes(tag.text) && CreatePoststyles.selectedTag,
            ]}
            onPress={() => {
              if (selectedTags.includes(tag.text)) {
                removeTag(tag.text);
              } else {
                addTag(tag.text);
              }
            }}
          >
            <Text>{tag.text}</Text>
          </TouchableOpacity>
        ))}

        {instrumentTags.map((tag) => (
          <TouchableOpacity
            key={tag.id}
            style={[
              CreatePoststyles.tag,
              selectedTags.includes(tag.text) && CreatePoststyles.selectedTag,
            ]}
            onPress={() => {
              if (selectedTags.includes(tag.text)) {
                removeTag(tag.text);
              } else {
                addTag(tag.text);
              }
            }}
          >
            <Text>{tag.text}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {isButton ? (
        <TouchableOpacity onPress={writeTags} style={CreatePoststyles.shareButton}>
          <Text style={CreatePoststyles.shareButtonText}>Paylaş</Text>
        </TouchableOpacity>
      ) : null}
    </ScrollView>
  );
}
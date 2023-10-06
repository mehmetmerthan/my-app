import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { MediaPicker } from "../components/mediaComponents/mediaPickerComponents/MediaPicker";
import VideoPlayer from "../components/mediaComponents/VideoPlayer";
import GetTags from "../Utils/TagUtils/GetTags";

export default function CreatePostScreen() {
  const {
    image,
    video,
    pickImage,
    pickVideo,
    isUploading,
    isButton,
    uploadMedia,
  } = MediaPicker();

  const [postText, setPostText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]); // Seçilen etiketleri tutacak state'i ekliyoruz

  const { styleTags, instrumentTags } = GetTags(); // Etiketleri alıyoruz

  const addTag = (tag) => {
    // Etiket eklemek için bir işlev tanımlıyoruz
    setSelectedTags([...selectedTags, tag]);
  };

  const removeTag = (tag) => {
    // Seçili etiketi kaldırmak için bir işlev tanımlıyoruz
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };
  function writeTags() {
    console.log(selectedTags);
  }
  return (
    <View style={styles.container}>
      {/* Medya Seçme Butonları */}
      <TouchableOpacity onPress={pickVideo} style={styles.mediaButton}>
        <Text style={styles.buttonText}>Video Seç</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={pickImage} style={styles.mediaButton}>
        <Text style={styles.buttonText}>Fotoğraf Seç</Text>
      </TouchableOpacity>

      {/* Seçilen Medya Gösterimi */}
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {video && <VideoPlayer uri={video} style={styles.video} />}

      {/* Etiket Girişi */}
      <TextInput
        placeholder="Bu paylaşım hakkında bir şeyler yazın..."
        onChangeText={(text) => setPostText(text)}
        value={postText}
        style={styles.textInput}
        multiline
      />

      <View style={styles.tagContainer}>
        <Text>Tag Ekle:</Text>
        {/* Stiller Etiketleri */}
        {styleTags.map((tag) => (
          <TouchableOpacity
            key={tag.id}
            style={[
              styles.tag,
              selectedTags.includes(tag.text) && styles.selectedTag,
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

        {/* Enstrüman Etiketleri */}
        {instrumentTags.map((tag) => (
          <TouchableOpacity
            key={tag.id}
            style={[
              styles.tag,
              selectedTags.includes(tag.text) && styles.selectedTag,
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

      {/* Paylaş Butonu */}
      {isButton ? (
        <TouchableOpacity onPress={writeTags} style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Paylaş</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3498db",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
  video: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  textInput: {
    fontSize: 16,
    padding: 12,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    textAlignVertical: "top",
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 16,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 8,
    marginBottom: 8, 
  },
  selectedTag: {
    backgroundColor: "#3498db",
    borderColor: "#3498db",
  },
  shareButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2ecc71",
    padding: 12,
    borderRadius: 8,
  },
  shareButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

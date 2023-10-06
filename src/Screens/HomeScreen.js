import { View, StyleSheet } from "react-native";
import { React } from "react";
import MediaPicker from "../components/mediaComponents/mediaPickerComponents/MediaPicker";

export default function HomeScreen() {
  return (
    <View>
      <MediaPicker/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  MediaPicker: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

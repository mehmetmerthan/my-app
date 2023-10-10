import { StyleSheet } from "react-native";
const CreatePoststyles = StyleSheet.create({
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
      marginBottom: 26,
      borderRadius: 8,
    },
    shareButtonText: {
      color: "#fff",
      fontSize: 16,
    },
  });
  export default CreatePoststyles;
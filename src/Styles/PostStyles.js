import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    userInfo: {
      flexDirection: "row",
      alignItems: "center",
    },
    username: {
      marginLeft: 10,
      fontWeight: "bold",
    },
    contentText: {
      marginTop: 10,
      fontSize: 15,
    },
    contentImage: {
      width: "100%",
      height: 200,
      width: 200,
      marginTop: 10,
      borderRadius: 5,
    },
    contentVideo: {
      width: "100%",
      height: 200,
      marginTop: 10,
    },
    actionContainer: {
      flexDirection: "row",
      marginTop: 20,
      justifyContent: "space-between",
      
    },
    likeContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    likeText: {
      marginLeft: 5,
    },
    commentContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    commentText: {
      marginLeft: 5,
    },
    tagsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 20,
    },
    tag: {
      backgroundColor: "#e0e0e0",
      padding: 10,
      borderRadius: 5,
      marginRight: 5,
    },
    // lineSeparator: {
    //   borderBottomWidth: 1,
    //   borderBottomColor: "#ccc",
    //   marginTop: 10,
    // },
  });

    export default styles;

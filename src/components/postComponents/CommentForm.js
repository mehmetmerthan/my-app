import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { createComment } from "../../graphql/mutations";
import { GetUserId } from "../../Utils/UserUtils/GetUserAttributes";
const CommentForm = ({ postId, fetchData }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async () => {
    if (commentText === "") return;
    else {
      try {
        
        const _userId = await GetUserId();
        const createCommentVariables = {
          postID: postId,
          userID: _userId,
          comment_content: commentText,
        };
        await API.graphql(
          graphqlOperation(createComment, {
            input: createCommentVariables,
          })
        );
        setCommentText("");
        console.log("yorum oluşturuldu");
        fetchData();
      } catch (error) {
        console.log("yorum oluşturma:", error);
      }
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Yorumunuzu buraya yazın"
        value={commentText}
        onChangeText={setCommentText}
      />
      <Button title="Yorum Yap" onPress={handleSubmit} />
    </View>
  );
};

export default CommentForm;

import { React } from "react";
import { View, Text } from "react-native";

const Comment = ({ comment }) => {

  return (
    <View>
      <Text>{comment.comment_content}</Text>
    </View>
  );
};

export { Comment };

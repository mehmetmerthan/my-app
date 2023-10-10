import { View, Text } from "react-native";
import { React, useState } from "react";

export default function LikeUtil({ item }) {
  
    const [likeCount, setLikeCount] = useState(0);
  
    function getLikes() {
        item.likeCount
    }
  
  return (
    <View>
      <Text>LikeUtil</Text>
    </View>
  );
}

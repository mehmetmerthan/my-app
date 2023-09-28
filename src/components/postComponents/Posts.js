import { View, Text } from "react-native";
import React from "react";

export default function Posts({ item }) {
  return (
    <View>
      <Text>
      {item.name}
      </Text>
    </View>
  );
}

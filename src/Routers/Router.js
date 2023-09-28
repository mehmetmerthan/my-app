import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import MediaPicker from "../components/mediaPickerComponents/MediaPicker";
const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MediaPicker" component={MediaPicker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
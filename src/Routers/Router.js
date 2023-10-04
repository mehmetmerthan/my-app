import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import UserDetailScreen from "../Screens/UserDetailScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import ProfileScreen from "../Screens/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import DiscoverScreen from "../Screens/DiscoverScreen";
import CreatePostScreen from "../Screens/CreatePostScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import AdvertDetailScreen from "../Screens/AdvertDetailScreen";

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <HomeStack.Screen
      name="UserDetail"
      component={UserDetailScreen}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);
const DiscoverStack = createStackNavigator();

const DiscoverStackScreen = () => (
  <DiscoverStack.Navigator>
    <DiscoverStack.Screen
      name="Discover"
      component={DiscoverScreen}
      options={{ headerShown: false }}
    />
    <DiscoverStack.Screen
      name="AdvertDetail"
      component={AdvertDetailScreen}
      options={{ headerShown: false }}
    />
    <DiscoverStack.Screen
      name="User Detail"
      component={UserDetailScreen}
      options={{ headerShown: false }}
    />
  </DiscoverStack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeStack"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="DiscoverStack"
      component={DiscoverStackScreen}
      options={{
        tabBarLabel: "Discover",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="explore" color={color} size={size} />
        ),
      }}
    />

    <Tab.Screen
      name="CreatePost"
      component={CreatePostScreen}
      options={{
        tabBarLabel: "Create",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="create-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationScreen}
      options={{
        tabBarLabel: "Notifications",
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name="notifications-circle-outline"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function Router() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

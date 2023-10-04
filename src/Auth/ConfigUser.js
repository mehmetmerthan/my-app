import React, { useEffect } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createUser } from "../graphql/mutations";
import { getUser } from "../graphql/queries";
import UserProps from "./UserProps";
import Router from "../Routers/Router";
import { View, Text } from "react-native";

export default function ConfigurationUser() {
  const [isDb, setDb] = React.useState(false);
  const [isProp, setProp] = React.useState(false);
  useEffect(() => {
    checkState();
  }, []);
  const checkState = async () => {
    try {
      const { attributes } = await Auth.currentAuthenticatedUser();
      if (attributes.sub) {
        console.log("Success check state " + attributes.sub);
        checkUser(attributes.sub);
      }
    } catch (error) {
      console.log("Error to check state" + error);
    }
  };
  const checkUser = async (userID) => {
    try {
      console.log("user id yi yazırıyorum" + userID);
      const { data } = await API.graphql(
        graphqlOperation(getUser, { id: userID })
      );
      console.log("data " + data);
      console.log("data getuser" + data.getUser);
      if (data.getUser) {
        console.log("User already exists in database");
        setDb(true);
      }
    } catch (error) {
      createUserToDb(userID);
      console.log("Error to check user " + error);
    }
  };
  const createUserToDb = async (userId) => {
    try {
      const input = {
        id: userId,
      };
      console.log("inputu yazırıyorum" + input);
      await API.graphql(graphqlOperation(createUser, { input }));
      console.log("Success create user to db.");
      setProp(true);
    } catch (error) {
      console.error("Error to user to db.", error);
    }
  };
  return isDb ? (
    <Router />
  ) : isProp ? (
    <UserProps />
  ) : (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

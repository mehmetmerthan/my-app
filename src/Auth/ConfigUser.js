import React, { useEffect } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { createUser } from "../graphql/mutations";
import { getUser } from "../graphql/queries";
import UserProps from "./UserProps";
import Router from "../Routers/Router";
import { View, Text } from "react-native";
import { GetUserId } from "../Utils/UserUtils/GetUserAttributes";
export default function ConfigurationUser() {
  const [isDb, setDb] = React.useState(false);
  const [isProp, setProp] = React.useState(false);
  useEffect(() => {
    checkState();
  }, []);
  const checkState = async () => {
    try {
      const UserId= await GetUserId();
      if (UserId) {
        checkUser(UserId);
      }
    } catch (error) {
      console.log("Error to check state" + error);
    }
  };
  const checkUser = async (userID) => {
    try {
      const { data } = await API.graphql(
        graphqlOperation(getUser, { id: userID })
      );
      if (data.getUser) {
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
      await API.graphql(graphqlOperation(createUser, { input }));
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

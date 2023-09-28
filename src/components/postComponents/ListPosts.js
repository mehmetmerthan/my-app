import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';
import Posts from './Posts';
export default function ListPosts() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await API.graphql(graphqlOperation(listUsers));
        setUserData(users.data.listUsers.items);
        console.log("users: ", userData);
      } catch (error) {
        console.error("GraphQL error:", error);
      }
    }

    fetchData();
  }, []);
  


  return (
    <FlatList
      data={userData}
      renderItem={({ item }) => <Posts item={item} />}
      keyExtractor={item => item.id}
    />
  );
}

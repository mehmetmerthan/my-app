import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { API, graphqlOperation, Storage } from "aws-amplify";
import Posts from "./Posts";
import { customListPosts, myGetUser } from "../../CustomQueries";
import { GetUserId } from "../../Utils/UserUtils/GetUserAttributes";

export default function ListPosts() {
  const [postData, setPostData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const userId = await GetUserId();
      const _userTags = await API.graphql(
        graphqlOperation(myGetUser, { id: userId })
      );
      const userTagsList = _userTags.data.getUser.tags;
      const updatedFilteredPost = [];
      for (let i = 0; i < userTagsList.length; i++) {
        const myVariables = { filter: { tags: { contains: userTagsList[i] } } };
        const posts = await API.graphql(
          graphqlOperation(customListPosts, myVariables)
        );
        if (posts.data.listPosts.items) {
          updatedFilteredPost.push(...posts.data.listPosts.items);
        }
      }
      const postPromises = updatedFilteredPost.map(async (post) => {
        const imageUrl = await getUrl(post.image_key);
        return {
          ...post,
          //imageUrl,
        };
      });
      Promise.all(postPromises).then((postsWithImages) => {
        setPostData(postsWithImages);
      });
    } catch (error) {
      console.error("GraphQL error:", error);
    }
  }
  const getUrl = async (key) => {
    const imageUrl = await Storage.get(key);
    return imageUrl;
  };

  return (
    <FlatList
      data={postData}
      renderItem={({ item }) => <Posts item={item} fetchData={fetchData}/>}
      keyExtractor={(item) => item.id}
    />
  );
}
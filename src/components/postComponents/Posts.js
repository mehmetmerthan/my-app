import { React, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Video,
  Button,
} from "react-native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import UserAvatar from "react-native-user-avatar";
import styles from "../../Styles/PostStyles";
import { Auth } from "aws-amplify";
import { LikePost } from "./LikePost";
import CommentForm from "./CommentForm";
import {Comment} from "./Comment";
const Post = ({ item, fetchData }) => {
  const [uId, setUId] = useState("");
  const [liked, setLiked] = useState(true);
  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    getUserId();
  }, []);
  async function getUserId() {
    const currentUser = await Auth.currentAuthenticatedUser();
    const userId = currentUser.attributes.sub;
    setUId(userId);
  }
  const likedByUser = item.Likes.items.some((like) => like.userID === uId);
  const toggleLike = () => {
    setLiked(!liked);
    const id = item.id;
    LikePost({ id, liked });
  };
  const toggleComments = () => {
    setShowComments(!showComments); // Yorumları gösterme durumunu tersine çevir
  };
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        {item.owner_name && (
          <UserAvatar size={50} name={item.owner_name} color="#000" />
        )}
        {item.owner_name && (
          <Text style={styles.username}>{item.owner_name}</Text>
        )}
      </View>
      {item.imageUrl && (
        <Image source={{ uri: item.imageUrl }} style={styles.contentImage} />
      )}

      {item.videoUrl && (
        <Video
          source={{ uri: item.videoUrl }}
          style={styles.contentVideo}
          resizeMode="cover"
          controls
        />
      )}
      {item.content && <Text style={styles.contentText}>{item.content}</Text>}
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={toggleLike}>
          <AntDesign
            name={likedByUser && liked ? "heart" : "hearto"}
            size={34}
            color={likedByUser && liked ? "red" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleComments}>
          <EvilIcons name="comment" size={44} color="black" />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.lineSeparator}></View> */}
      {item.tags && item.tags.length > 0 && (
        <View style={styles.tagsContainer}>
          {item.tags.map((tag, index) => (
            <TouchableOpacity key={index} style={styles.tag}>
              <Text>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {showComments && (
        <View>
          {item.Comments.items &&
            item.Comments.items.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          <CommentForm postId={item.id} fetchData={fetchData}/>
        </View>
      )}
    </View>
  );
};
export default Post;

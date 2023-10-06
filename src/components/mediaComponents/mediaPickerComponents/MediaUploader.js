import { Storage } from "@aws-amplify/storage";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { createPost } from "../../../graphql/mutations";

async function UploadImageToStorage(setIsUploading, image) {
  try {
    setIsUploading(true);
    const uri = image;
    const response = await fetch(uri);
    const blob = await response.blob();
    const key = `Post/images/${Date.now()}`;
    await Storage.put(key, blob, {
      contentType: blob.type,
    });
    SavePostToDb(key);
    setIsUploading(false);
  } catch (err) {
    console.log("Error uploading image to storage:", err);
  }
}
async function UploadVideoToStorage(setIsUploading, image, video) {
  try {
    setIsUploading(true);
    const Uri = image;
    const Response = await fetch(Uri);
    const Blob = await Response.blob();
    const Key = `Post/video/thumbnails/${Date.now()}`;
    await Storage.put(Key, Blob, {
      contentType: Blob.type,
    });
    const videoResponse = await fetch(video);
    const videoBlob = await videoResponse.blob();
    const videoKey = `Post/video/${Date.now()}`;
    await Storage.put(videoKey, videoBlob, {
      contentType: videoBlob.type,
    });
    SavePostToDb(Key, videoKey);
    setIsUploading(false);
  } catch (err) {
    console.log("Error uploading video to storage:", err);
  }
}
async function SavePostToDb(key, videoKey) {
  const user = await Auth.currentAuthenticatedUser();
  const userSub = user.attributes.sub;
  const username = user.attributes.name;
  const post = {
    title: "test",
    owner_name: username,
    image_key: key,
    video_key: videoKey,
    userID: userSub,
  };
  try {
    await API.graphql(graphqlOperation(createPost, { input: post }));
    console.log("Post created successfully!");
  } catch (err) {
    console.log("Error creating post", err);
  }
}

export { UploadImageToStorage, UploadVideoToStorage };
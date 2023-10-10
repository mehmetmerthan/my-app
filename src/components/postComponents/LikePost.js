import { API, graphqlOperation } from "aws-amplify";
import { createLike, deleteLike } from "../../graphql/mutations";
import { likesByPostID } from "../../graphql/queries";
import { GetUserId } from "../../Utils/UserUtils/GetUserAttributes";
export async function LikePost({ id, liked }) {
  const _userId = await GetUserId();
  const createLikeVariables = { postID: id, userID: _userId };
  if (!liked) {
    try {
      await API.graphql(
        graphqlOperation(createLike, { input: createLikeVariables })
      );
      console.log("liked");
    } catch (error) {
      console.log("beğeni oluşturma:", error);
    }
  } else {
    try {
      const like = await API.graphql(
        graphqlOperation(likesByPostID, {
          postID: id,
          filter: {
            userID: {
              contains: _userId,
            },
          },
        })
      );
      const likeId = like.data.likesByPostID.items[0].id;
      const deleteLikeVariables = { id: likeId };
      await API.graphql({
        query: deleteLike,
        variables: { input: deleteLikeVariables },
      });
      console.log("unliked");
    } catch (error) {
      console.log("beğeni silme:", error);
    }
  }
}

export const customListPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        image_key
        video_key
        userID
        tags
        Likes {
          items {
            id
            userID
            postID
          }
        }
        Comments {
          items {
            comment_content
            id
            postID
            userID
          }
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

export const myGetUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      tags
    }
  }
`;
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      comment_content
      postID
      userID
      Post {
        id
        content
        image_key
        video_key
        userID
        tags
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        name
        pp_key
        tags
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      comment_content
      postID
      userID
      Post {
        id
        content
        image_key
        video_key
        userID
        tags
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        name
        pp_key
        tags
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      comment_content
      postID
      userID
      Post {
        id
        content
        image_key
        video_key
        userID
        tags
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        name
        pp_key
        tags
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
      id
      postID
      userID
      Post {
        id
        content
        image_key
        video_key
        userID
        tags
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        name
        pp_key
        tags
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
      id
      postID
      userID
      Post {
        id
        content
        image_key
        video_key
        userID
        tags
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        name
        pp_key
        tags
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
      id
      postID
      userID
      Post {
        id
        content
        image_key
        video_key
        userID
        tags
        createdAt
        updatedAt
        __typename
      }
      User {
        id
        name
        pp_key
        tags
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      content
      image_key
      video_key
      User {
        id
        name
        pp_key
        tags
        createdAt
        updatedAt
        __typename
      }
      userID
      tags
      Likes {
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      content
      image_key
      video_key
      User {
        id
        name
        pp_key
        tags
        createdAt
        updatedAt
        __typename
      }
      userID
      tags
      Likes {
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      content
      image_key
      video_key
      User {
        id
        name
        pp_key
        tags
        createdAt
        updatedAt
        __typename
      }
      userID
      tags
      Likes {
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createInstrumentTag = /* GraphQL */ `
  mutation CreateInstrumentTag(
    $input: CreateInstrumentTagInput!
    $condition: ModelInstrumentTagConditionInput
  ) {
    createInstrumentTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateInstrumentTag = /* GraphQL */ `
  mutation UpdateInstrumentTag(
    $input: UpdateInstrumentTagInput!
    $condition: ModelInstrumentTagConditionInput
  ) {
    updateInstrumentTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteInstrumentTag = /* GraphQL */ `
  mutation DeleteInstrumentTag(
    $input: DeleteInstrumentTagInput!
    $condition: ModelInstrumentTagConditionInput
  ) {
    deleteInstrumentTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createStyleTag = /* GraphQL */ `
  mutation CreateStyleTag(
    $input: CreateStyleTagInput!
    $condition: ModelStyleTagConditionInput
  ) {
    createStyleTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStyleTag = /* GraphQL */ `
  mutation UpdateStyleTag(
    $input: UpdateStyleTagInput!
    $condition: ModelStyleTagConditionInput
  ) {
    updateStyleTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStyleTag = /* GraphQL */ `
  mutation DeleteStyleTag(
    $input: DeleteStyleTagInput!
    $condition: ModelStyleTagConditionInput
  ) {
    deleteStyleTag(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      Posts {
        nextToken
        __typename
      }
      pp_key
      Likes {
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      tags
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      Posts {
        nextToken
        __typename
      }
      pp_key
      Likes {
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      tags
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      Posts {
        nextToken
        __typename
      }
      pp_key
      Likes {
        nextToken
        __typename
      }
      Comments {
        nextToken
        __typename
      }
      tags
      createdAt
      updatedAt
      __typename
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateInstrumentTag = /* GraphQL */ `
  subscription OnCreateInstrumentTag(
    $filter: ModelSubscriptionInstrumentTagFilterInput
  ) {
    onCreateInstrumentTag(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInstrumentTag = /* GraphQL */ `
  subscription OnUpdateInstrumentTag(
    $filter: ModelSubscriptionInstrumentTagFilterInput
  ) {
    onUpdateInstrumentTag(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInstrumentTag = /* GraphQL */ `
  subscription OnDeleteInstrumentTag(
    $filter: ModelSubscriptionInstrumentTagFilterInput
  ) {
    onDeleteInstrumentTag(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateStyleTag = /* GraphQL */ `
  subscription OnCreateStyleTag($filter: ModelSubscriptionStyleTagFilterInput) {
    onCreateStyleTag(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateStyleTag = /* GraphQL */ `
  subscription OnUpdateStyleTag($filter: ModelSubscriptionStyleTagFilterInput) {
    onUpdateStyleTag(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteStyleTag = /* GraphQL */ `
  subscription OnDeleteStyleTag($filter: ModelSubscriptionStyleTagFilterInput) {
    onDeleteStyleTag(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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

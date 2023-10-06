/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      owner_name
      title
      image_key
      video_key
      User {
        id
        name
        pp_key
        createdAt
        updatedAt
        __typename
      }
      userID
      tags
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
      owner_name
      title
      image_key
      video_key
      User {
        id
        name
        pp_key
        createdAt
        updatedAt
        __typename
      }
      userID
      tags
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
      owner_name
      title
      image_key
      video_key
      User {
        id
        name
        pp_key
        createdAt
        updatedAt
        __typename
      }
      userID
      tags
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
      createdAt
      updatedAt
      __typename
    }
  }
`;

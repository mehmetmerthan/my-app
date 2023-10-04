/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInstrumentTag = /* GraphQL */ `
  query GetInstrumentTag($id: ID!) {
    getInstrumentTag(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInstrumentTags = /* GraphQL */ `
  query ListInstrumentTags(
    $filter: ModelInstrumentTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstrumentTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStyleTag = /* GraphQL */ `
  query GetStyleTag($id: ID!) {
    getStyleTag(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listStyleTags = /* GraphQL */ `
  query ListStyleTags(
    $filter: ModelStyleTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStyleTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

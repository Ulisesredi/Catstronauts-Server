const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!

    track(id: ID!): Track
  }

  type Mutation {
    incrementTrackViews(id: ID!): incrementTrackViewsResponse!
  }

  type incrementTrackViewsResponse {
    "Similar to the HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful "
    success: Boolean!
    "Human-friendly message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    numberOfViews: Int
    modules: [Module!]!
  }
  "A module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    title: String!
    length: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;

const {gql} = require("apollo-server");

module.exports = gql `
    type Podcast {
        id: ID!
        name: String!
        url: String!
    }

    type Query {
        podcasts: [Podcast]
    }

    input CreatePodcastInput {
        name: String!
        url: String
    }

    input UpdatePodcastInput {
        name: String
        url: String
    }
    
    type DeletePayload {
        id: ID!
    }

    type Mutation {
        createPodcast(input: CreatePodcastInput!): Podcast!
        updatePodcast(id: ID!, input: UpdatePodcastInput!): Podcast!
        deletePodcast(id: ID!): DeletePayload!
    }
`;



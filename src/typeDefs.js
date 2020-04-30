import { gql } from 'apollo-server';

export const typeDefs = gql`

type Query {
    helloWorld: String!
    getDogs: [Dog!]!
}

type Dog {
    id: ID!
    name: String!
}

type Mutation {
    createDog(name: String!): Dog!
}

`;
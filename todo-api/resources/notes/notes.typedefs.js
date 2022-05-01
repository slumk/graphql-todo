import { gql } from 'apollo-server-express'
export const typeDefs = gql`
    type Note {
        id: ID
        note_name: String!,
        note_content: String!
    }
    type Mutation {
        createNote(name: String!, content: String!): Note
        deleteNote(id: ID!): Note
    }
    type Query {
        notes: [Note]
    }
`

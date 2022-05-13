const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Todo {
        id: Int
        description: String!
        isCompleted: Boolean!
    }

    # Queries
    type Query {
        getAllTodos: [Todo!]!
        getTodo(id: Int): Todo!
    }

    # Mutations
    type Mutation {
        createTodo(description: String!): Todo!
    }
`;

module.exports = { typeDefs };

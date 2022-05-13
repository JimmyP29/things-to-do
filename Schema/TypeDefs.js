const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Todo {
        id: Int
        userId: Int!
        description: String!
        isCompleted: Boolean!
    }

    type Settings {
        isDeveloper: Boolean!
    }

    type User {
        id: Int
        name: String!
        email: String!
        settings: Settings!
    }

    # Queries
    type Query {
        getAllTodos: [Todo!]!
        getTodo(id: Int): Todo!
        getTodosByUserId(userId: Int): [Todo!]!
        getAllUsers: [User!]!
    }

    # Mutations
    type Mutation {
        createTodo(userId: Int!, description: String!): Todo!
        updateTodo(id: Int, description: String, isCompleted: Boolean): Todo
    }
`;

module.exports = { typeDefs };

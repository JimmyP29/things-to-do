const { gql } = require('apollo-server-express');

const typeDefs = gql`
    """
    Todo item in the system
    """
    type Todo {
        id: Int
        userId: Int!
        """
        What needs to be done?
        """
        description: String! 
        """
        Has it been completed?
        """
        isCompleted: Boolean!
    }

    """
    User settings
    """
    type Settings {
        """
        Is this user a developer, or not?
        """
        isDeveloper: Boolean!
    }

    """
    User in the system
    """
    type User {
        id: Int
        """
        User's name
        """
        name: String!
        """
        User's email address
        """
        email: String!
        """
        User's system settings
        """
        settings: Settings!
    }

    # Queries
    type Query {
        """
        Returns all todos in the system
        """
        getAllTodos: [Todo!]!
        """
        Returns a single todo by it's id
        """
        getTodo(id: Int): Todo!
        """
        Returns all todos assigned to a given user by their userId
        """
        getTodosByUserId(userId: Int): [Todo!]!
        """
        Returns all users in the system
        """
        getAllUsers: [User!]!
    }

    # Mutations
    type Mutation {
        """
        Creates a new Todo in the system
        """
        createTodo(userId: Int!, description: String!): Todo!
        """
        Updates an existing todo in the system by the given todo details
        """
        updateTodo(id: Int, description: String, isCompleted: Boolean): Todo
        """
        Toggles an existing todo to be completed, or not.
        """
        toggleTodoIsCompleted(id: Int): Todo
    }
`;

module.exports = { typeDefs };

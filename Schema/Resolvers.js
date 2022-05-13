const { todos, users } = require('../DummyData');

const resolvers = {
    Query: {
        getAllTodos() {
            return todos || [];
        },
        getTodo(_, { id }) {
            return todos.find(todo => todo.id === id) || null;
        },
        getTodosByUserId(_, { userId }) {
            return todos.filter(todo => todo.userId === userId) || null;
        },
        getAllUsers() {
            return users || [];
        }
    },
    Mutation: {
        createTodo(_, { userId, description }) {
            const todo = {
                id: todos.length + 1,
                userId,
                description,
                isCompleted: false,
            };

            todos.push(todo);
            return todo;
        },
        updateTodo(_, { id, description, isCompleted }) {
            const todo = todos.find(todo => todo.id === id);
            let todoIndex = todos.findIndex(todo => todo.id === id);

            if (todoIndex !== -1)
                todos[todoIndex] = { id, description, isCompleted, userId: todo.userId };

            return todos[todoIndex];
        }
    }
};

module.exports = { resolvers };

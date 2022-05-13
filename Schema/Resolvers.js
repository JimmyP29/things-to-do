const { todos } = require('../DummyData');

const resolvers = {
    Query: {
        getAllTodos() {
            return todos;
        },
        getTodo(_, { id }) {
            return todos.find(todo => todo.id === id)
        }
    },
    Mutation: {
        createTodo(_, { description }) {
            const todo = {
                id: todos.length + 1,
                description,
                isCompleted: false,
            };

            todos.push(todo);
            return todo;
        }
    }
};

module.exports = { resolvers };

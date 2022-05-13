const { todos } = require('../DummyData');

const resolvers = {
    Query: {
        getAllTodos() {
            return todos;
        },
        getTodo(_, args) {
            return todos.find(todo => todo.id === args.id)
        }
    }
};

module.exports = { resolvers };

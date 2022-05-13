const { todos } = require('../DummyData');

const resolvers = {
    Query: {
        getAllTodos() {
            return todos;
        }
    }
};

module.exports = { resolvers };

let todos = [
    {
        id: 1,
        userId: 111,
        description: 'Make cup of coffee',
        isCompleted: true,
    },
    {
        id: 2,
        userId: 222,
        description: 'Review PRs from yesterday',
        isCompleted: false,
    },
    {
        id: 3,
        userId: 111,
        description: 'Annoy Belmiro',
        isCompleted: false,
    }
];

let users = [
    {
        id: 111,
        name: 'James',
        email: 'james@nothing.com',
        settings: {
            isDeveloper: true,
        }
    },
    {
        id: 222,
        name: 'Augusto',
        email: 'augusto@nothing.com',
        settings: {
            isDeveloper: true,
        }
    },

];

module.exports = { todos, users };
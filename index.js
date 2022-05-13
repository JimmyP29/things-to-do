const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const PORT = 3001;

app.listen({ port: PORT }, () => {
    console.log(`Running on port ${PORT}, let's go!!!`);
});

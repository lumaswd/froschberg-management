const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');

const port = process.env.port || 3000;
const typeDefs = gql(fs.readFileSync(__dirname.concat('/schema.graphql'), 'utf8'));
const resolvers = require('./resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true
});

const app = express();
server.applyMiddleware({ app });


app.listen(port, () => `Server listening on port ${ port }`);

const { connectToDatabase } = require('./database');
connectToDatabase();

const { createGraphqlServer } = require('./server');
createGraphqlServer();
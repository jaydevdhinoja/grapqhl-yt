const { ApolloServer } = require("apollo-server");
const connectDB = require("./config/db");
const typeDefs = require("./types");
const resolvers = require("./resolvers");
const models = require("./models");

connectDB();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models }
})
debugger
server.listen({port: process.env.PORT || 4000}).then(({url}) => {
    console.log(`server is ready at ${url}`)
})
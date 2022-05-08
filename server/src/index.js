const { ApolloServer, gql } = require('apollo-server-express');
const {typeDefs} = require("./schema/TypeDefs")
const {resolvers} = require("./schema/Resolvers")
const express = require('express')
const app = express()
const mongoose = require('mongoose');
const { graphql } = require('graphql');
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 8000
async function startServer(){
const server = new ApolloServer({ 
    typeDefs, 
    resolvers});
 
await server.start()
server.applyMiddleware({app})
 
app.use(cors())
app.use(express.json())
app.use("/graphql", graphqlHTTP({
    schema:{resolvers, typeDefs},
    graphiql:true
}))
// comment

await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.q9o0b.mongodb.net/${process.env.MONOG_DB}?retryWrites=true&w=majority`,
{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: 'Swatcher'
}).then(()=>{
    console.log('Database Connected');
}).catch(err=>{
    console.log('Database not connected ' + err)
})

 app.listen(port, ()=>{
     console.log(`Server Running on port 4000`)
 })
}

startServer();
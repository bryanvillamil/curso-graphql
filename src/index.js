import express from "express";
import mongoose from "mongoose";
import { ApolloServer} from "apollo-server";
import {resolvers} from "./resolver";
import { typeDefs } from "./typeDefs";


// const server = async () => {
//     const app = express();
//     const server = new ApolloServer({
//         typeDefs,
//         resolvers
//     })

//     server.applyMiddleware({app});

//     try{
//         await mongoose.connect("mongodb+srv://bryan:bryan123@cluster0-vdqaz.mongodb.net/test", {useNewUrlParser: true})
//     }catch(err){
//         console.log(err)
//     }


//     app.get('/', (req, res) => res.send('hello world'))

//     app.listen({port: 4001}, ()=> {
//         console.log('connected')
//     })

// }

// server();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`:cohete:  Server ready at ${url}`);
});
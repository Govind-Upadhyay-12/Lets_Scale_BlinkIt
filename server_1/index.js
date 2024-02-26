import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import typeDefs from "./src/typeDef.js";
import resolvers from "./src/resolver.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import UserSchema from "./src/models/UserSchema.js";
import { publisher,subscriber } from "../Delievery_Server_2/redis-client/index.js";
import { worker } from "./src/Redis_consumer.js";

async function startApolloServer() {
  const app = express();

  const URI = "mongodb://localhost:27017/blinkit";
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
  subscriber.subscribe("message-publish");
  subscriber.on("message",async(channel,message)=>{
    if(channel=="message-publish"){
      console.log(message)
    }
  })

  app.use(cors());
  app.use(bodyParser.json());

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, res }) => {
      // const token = req.headers['token'];
      // console.log(token)
      // return { token };
    },
  });

  await server.start();

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3000;
  const httpServer = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });

  process.on("SIGINT", () => {
    console.log("Server shutting down...");
    httpServer.close(() => {
      console.log("Server stopped");
      mongoose.disconnect(() => {
        console.log("Disconnected from MongoDB");
        process.exit(0);
      });
    });
  });
}

startApolloServer();

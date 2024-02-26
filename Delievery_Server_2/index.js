import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import Authenticate from "./routes/Auth.js";
import { publisher, subscriber } from "./redis-client/index.js";
import { channel } from "diagnostics_channel";

const app = express();
app.use(bodyparser.json());

app.use("/api/use", Authenticate);
const PORT = 3001;

const URI = "mongodb://localhost:27017/blinkit";

mongoose
  .connect(URI)
  .then(() => {
    console.log("dbconnected");
  })
  .catch(() => {
    console.log("error connecting in db");
    process.exist(0);
  });

async function publicMessage() {
  const message = "priya is looking cute";
  await publisher.publish("message-publish", message);
}

publicMessage();
subscriber.subscribe("sending_to_delievery");
subscriber.on("message", async (channel, message) => {
  console.log(channel, JSON.parse(message));
});

app.listen(PORT, () => {
  console.log("server is running on port ");
});

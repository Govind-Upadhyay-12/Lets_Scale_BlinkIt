import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import Authenticate from "./routes/Auth.js";
import { publisher, subscriber } from "./redis-client/index.js";
import { Queue } from "bullmq";

const connectionOpts = {
  host: "127.0.0.1",
  port: 6379,
};

const notificationQueue = new Queue("data-queue", {
  connection: connectionOpts,
});

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

  const notification_message = "Booked Successfully";
  const result = await notificationQueue.add("data-adding-to-queue", {
    notification_message,
  });
  console.log("job added to the queue", result.id);
});

app.listen(PORT, () => {
  console.log("server is running on port ");
});

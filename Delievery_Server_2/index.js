import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";

const app = express();
app.use(bodyparser.json());
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

app.listen(PORT, () => {
  console.log("server is running on port ");
});

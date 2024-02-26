import { Worker } from "bullmq";

const connectionOpts = {
  host: "127.0.0.1",
  port: 6379,
};

export const worker = new Worker(
  "data-queue",
  async (job) => {
    console.log(job.id, "congratulation ur order successfully placed");
  },
  { connection: connectionOpts }
);

import Redis from "ioredis";
export const publisher = new Redis({
  host: "localhost",
  port: 6379,
});
export const subscriber = new Redis({
  host: "localhost",
  port: 6379,
});

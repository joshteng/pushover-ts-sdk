import { Pushover } from "../src";

const client = new Pushover(
  process.env["PUSHOVER_API_KEY"]!,
  process.env["PUSHOVER_GROUP"]!
);

client.notify("Hello World");

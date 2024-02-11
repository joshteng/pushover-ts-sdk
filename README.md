# Pushover TS SDK

This SDK is meant for use with https://pushover.net to send push notifications
https://www.npmjs.com/package/pushover-ts

## Usage
```sh
npm i pushover-ts
```

```ts
import { Pushover } from "../src";

const client = new Pushover(
  process.env["PUSHOVER_API_KEY"]!,
  process.env["PUSHOVER_GROUP"]!
);

client.notify("Hello World");
```

## Development
```sh
pnpm i
pnpm run example
```

## Build & Publish
```sh
pnpm run build
npm publish
```
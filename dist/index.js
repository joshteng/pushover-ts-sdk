"use strict";Object.defineProperty(exports, "__esModule", {value: true});var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/index.ts
var Pushover = class {
  constructor(apiKey, userGroup) {
    this.endpoint = "https://api.pushover.net/1/messages.json";
    this.token = apiKey;
    this.user = userGroup;
  }
  notify(message, priority = 0) {
    return __async(this, null, function* () {
      console.log("sending notification......");
      const body = {
        token: this.token,
        user: this.user,
        message
      };
      if (priority != 0) {
        body["priority"] = priority;
      }
      if (priority == 2) {
        body["retry"] = 10 * 60;
        body["expire"] = 2 * 60 * 60;
      }
      const resp = yield fetch(this.endpoint, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(body)
      });
      if (resp.status !== 200) {
        console.log("Notification failed");
      }
    });
  }
};


exports.Pushover = Pushover;
//# sourceMappingURL=index.js.map
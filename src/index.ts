export class Pushover {
  private endpoint = "https://api.pushover.net/1/messages.json";
  private token: string;
  private user: string;

  constructor(apiKey: string, userGroup: string) {
    this.token = apiKey;
    this.user = userGroup;
  }

  async notify(message: string, priority = 0) {
    console.log("sending notification......");

    const body: { [key: string]: string | number } = {
      token: this.token,
      user: this.user,
      message: message,
    };

    if (priority != 0) {
      body["priority"] = priority;
    }

    if (priority == 2) {
      body["retry"] = 10 * 60;
      body["expire"] = 2 * 60 * 60;
    }

    const resp = await fetch(this.endpoint, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (resp.status !== 200) {
      console.log("Notification failed");
    }
  }
}

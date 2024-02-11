declare class Pushover {
    private endpoint;
    private token;
    private user;
    constructor(apiKey: string, userGroup: string);
    notify(message: string, priority?: number): Promise<void>;
}

export { Pushover };

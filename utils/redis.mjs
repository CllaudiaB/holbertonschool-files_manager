import { createClient } from "redis";

class RedisClient {
    constructor() {
        this.client = createClient();
        this.client.on("error", function (err) {
            console.log("Error " + err);
        });
    }

    isAlive() {
        return this.client.connected;
    }

    async get(key) {
        this.client.get(key, function(err, reply) {
            return reply;
        });
    }

    async set(key, value, duration) {
        this.client.set(key, value, "EX", duration);
    }
}
const redisClient = new RedisClient();
export default redisClient;

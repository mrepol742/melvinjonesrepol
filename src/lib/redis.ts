import { Redis } from "@upstash/redis";

export function redis() {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  )
    return null;
  return Redis.fromEnv();
}

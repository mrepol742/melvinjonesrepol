import { createRedis } from "@mrepol742/next-kit/server/redis";

// Keep the routes' existing unavailable-service responses when Redis is unset.
export function redis() {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    return null;
  }
  return createRedis();
}

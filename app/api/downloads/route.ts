import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = process.env.UPSTASH_KV_REST_API_URL
  ? new Redis({
      url: process.env.UPSTASH_KV_REST_API_URL!,
      token: process.env.UPSTASH_KV_REST_API_TOKEN!,
    })
  : null;

export async function GET() {
  const count = redis ? await redis.get<number>("downloads") ?? 0 : 0;
  return NextResponse.json({ count });
}

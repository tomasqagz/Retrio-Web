import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = process.env.UPSTASH_REDIS_REST_URL
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    })
  : null;

export async function GET() {
  console.log(`[download] ${new Date().toISOString()}`);

  if (redis) {
    await redis.incr("downloads");
  }

  const res = await fetch("https://api.github.com/repos/tomasqagz/Retrio/releases/latest", {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    return NextResponse.redirect("https://github.com/tomasqagz/Retrio/releases/latest");
  }

  const data = await res.json();
  const asset = data.assets?.find((a: { name: string }) => a.name.endsWith(".exe"));

  if (!asset) {
    return NextResponse.redirect("https://github.com/tomasqagz/Retrio/releases/latest");
  }

  return NextResponse.redirect(asset.browser_download_url);
}

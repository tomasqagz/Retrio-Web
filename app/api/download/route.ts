import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.github.com/repos/tomasqagz/Retrio/releases/latest", {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 300 }, // cache 5 min
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

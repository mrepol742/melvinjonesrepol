import { NextRequest, NextResponse } from "next/server";

export default function HeadlessBrowserCheck(req: NextRequest) {
  const ua = req.headers.get("user-agent") || "";
  const headlessPatterns = [
    "HeadlessChrome",
    "PhantomJS",
    "SlimerJS",
    "Puppeteer",
    "Playwright",
    "Chrome-Lighthouse",
  ];

  const isHeadless = headlessPatterns.some((p) =>
    ua.toLowerCase().includes(p.toLowerCase()),
  );

  if (isHeadless) {
    return new NextResponse(
      JSON.stringify({ error: "Automated browsers are not allowed" }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}

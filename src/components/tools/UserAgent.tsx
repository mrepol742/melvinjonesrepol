"use client";

import { useEffect, useState } from "react";

interface UserAgentInfo {
  ua: string;
  browser: string;
  os: string;
  device: string;
}

export default function UserAgentTool() {
  const [uaInfo, setUaInfo] = useState<UserAgentInfo | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent;

    let browser = "Unknown";
    if (/Chrome/i.test(ua)) browser = "Chrome";
    else if (/Firefox/i.test(ua)) browser = "Firefox";
    else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = "Safari";
    else if (/Edge/i.test(ua)) browser = "Edge";

    let os = "Unknown";
    if (/Windows/i.test(ua)) os = "Windows";
    else if (/Mac/i.test(ua)) os = "MacOS";
    else if (/Linux/i.test(ua)) os = "Linux";
    else if (/Android/i.test(ua)) os = "Android";
    else if (/iPhone|iPad|iPod/i.test(ua)) os = "iOS";

    let device = /Mobile/i.test(ua) ? "Mobile" : "Desktop";

    setUaInfo({ ua, browser, os, device });
  }, []);

  return (
    <main className="mt-18 p-3 md:p-8">
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          User Agent Info
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 mb-6">
          This tool detects your browser, operating system, and device
          information from your user agent string.
        </p>

        {uaInfo ? (
          <div className="space-y-4">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-6 shadow-inner">
              <h2 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">
                User Agent String
              </h2>
              <p className="text-gray-700 dark:text-gray-200 break-all">
                {uaInfo.ua}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 shadow-inner space-y-2 text-left">
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  Browser:
                </span>{" "}
                <span className="text-gray-700 dark:text-gray-200 ">
                  {uaInfo.browser}
                </span>
              </p>
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  Operating System:
                </span>{" "}
                <span className="text-gray-700 dark:text-gray-200 ">
                  {uaInfo.os}
                </span>
              </p>
              <p>
                <span className="font-semibold text-gray-800 dark:text-gray-100">
                  Device:
                </span>{" "}
                <span className="text-gray-700 dark:text-gray-200 ">
                  {uaInfo.device}
                </span>
              </p>
            </div>
          </div>
        ) : (
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            Detecting your user agent...
          </p>
        )}
      </section>
    </main>
  );
}

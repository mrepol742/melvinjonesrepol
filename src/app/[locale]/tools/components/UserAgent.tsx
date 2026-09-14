"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

interface UserAgentInfo {
  ua: string;
  browser: string;
  os: string;
  device: string;
}

export default function UserAgentTool() {
  const t = useTranslations("tools_user_agent");
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
    <main className="mt-18 px-4 py-12 md:px-8">
      <section className="mx-auto max-w-md border border-stone-300 bg-stone-50 p-6 shadow-[5px_5px_0_0_rgb(249_115_22)] dark:border-orange-500/40 dark:bg-zinc-900 md:p-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">Browser details</p>
        <h1 className="text-2xl font-bold text-stone-950 dark:text-stone-100">
          {t("title")}
        </h1>
        <p className="mb-6 mt-2 leading-7 text-stone-600 dark:text-stone-300">
          {t("description")}
        </p>

        {uaInfo ? (
          <div className="space-y-4">
            <div className="border border-stone-300 bg-orange-50 p-6 dark:border-orange-500/25 dark:bg-zinc-800">
              <h2 className="mb-2 text-lg font-bold text-stone-950 dark:text-stone-100">
                {t("ua_string_label")}
              </h2>
              <p className="break-all text-stone-700 dark:text-stone-200">
                {uaInfo.ua}
              </p>
            </div>

            <div className="space-y-3 border border-stone-300 bg-white p-4 text-left dark:border-orange-500/25 dark:bg-zinc-800">
              <p>
                <span className="font-semibold text-stone-950 dark:text-stone-100">
                  {t("browser_label")}
                </span>{" "}
                <span className="text-stone-700 dark:text-stone-200">
                  {uaInfo.browser}
                </span>
              </p>
              <p>
                <span className="font-semibold text-stone-950 dark:text-stone-100">
                  {t("os_label")}
                </span>{" "}
                <span className="text-stone-700 dark:text-stone-200">
                  {uaInfo.os}
                </span>
              </p>
              <p>
                <span className="font-semibold text-stone-950 dark:text-stone-100">
                  {t("device_label")}
                </span>{" "}
                <span className="text-stone-700 dark:text-stone-200">
                  {uaInfo.device}
                </span>
              </p>
            </div>
          </div>
        ) : (
          <p className="mt-6 text-stone-500 dark:text-stone-300">
            {t("detecting")}
          </p>
        )}
      </section>
    </main>
  );
}

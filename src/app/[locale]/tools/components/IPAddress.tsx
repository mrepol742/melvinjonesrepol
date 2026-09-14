"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

interface IPInfo {
  ip: string;
  version: "IPv4" | "IPv6" | null;
  isp?: string;
  city?: string;
  region?: string;
  country?: string;
}

export default function IPAddressTool() {
  const t = useTranslations("tools_ip_address");
  const [ipInfo, setIpInfo] = useState<IPInfo | null>(null);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        // Using ipapi.co for richer info
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const version = data.version === "IPv6" ? "IPv6" : "IPv4";

        setIpInfo({
          ip: data.ip,
          version,
          isp: data.org,
          city: data.city,
          region: data.region,
          country: data.country_name,
        });
      } catch (err) {
        console.error("Error fetching IP info:", err);
        toast.error(
          err instanceof Error ? err.message : t("failed_fetch_error"),
        );
      }
    };

    fetchIP();
  }, []);

  return (
    <main className="mt-18 px-4 py-12 md:px-8">
      <section className="mx-auto max-w-md border border-stone-300 bg-stone-50 p-6 text-center shadow-[5px_5px_0_0_rgb(249_115_22)] dark:border-orange-500/40 dark:bg-zinc-900 md:p-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-600 dark:text-orange-400">Network details</p>
        <h1 className="text-2xl font-bold text-stone-950 dark:text-stone-100">
          {t("title")}
        </h1>
        <p className="mb-6 mt-2 leading-7 text-stone-600 dark:text-stone-300">
          {t("description")}
        </p>

        {ipInfo ? (
          <div className="mt-5 space-y-4">
            <div className="border border-stone-300 bg-orange-50 p-6 dark:border-orange-500/25 dark:bg-zinc-800">
              <h2 className="text-4xl font-bold text-stone-950 dark:text-stone-100">
                {ipInfo.ip}
              </h2>
              <p className="mt-1 text-orange-700 dark:text-orange-300">
                {ipInfo.version}
              </p>
            </div>

            {ipInfo.isp && (
              <div className="border border-stone-300 bg-white p-4 text-left dark:border-orange-500/25 dark:bg-zinc-800">
                <p>
                  <span className="font-semibold text-stone-950 dark:text-stone-100">
                    {t("isp_label")}
                  </span>{" "}
                  <span className="mt-1 text-stone-600 dark:text-stone-300">
                    {" "}
                    {ipInfo.isp}
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-stone-950 dark:text-stone-100">
                    {t("location_label")}
                  </span>{" "}
                  <span className="mt-1 text-stone-600 dark:text-stone-300">
                    {ipInfo.city}, {ipInfo.region}, {ipInfo.country}
                  </span>
                </p>
              </div>
            )}
          </div>
        ) : (
          <p className="mt-6 text-stone-500 dark:text-stone-300">
            {t("fetching")}
          </p>
        )}
      </section>
    </main>
  );
}

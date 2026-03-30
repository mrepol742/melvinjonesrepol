"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface IPInfo {
  ip: string;
  version: "IPv4" | "IPv6" | null;
  isp?: string;
  city?: string;
  region?: string;
  country?: string;
}

export default function IPAddressTool() {
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
          err instanceof Error ? err.message : "Failed to fetch IP information",
        );
      }
    };

    fetchIP();
  }, []);

  return (
    <main className="mt-18 p-3 md:p-8">
      <section className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10 text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          IP Address
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300 mb-6">
          This tool will allow you to check your IP address and related
          information.
        </p>

        {ipInfo ? (
          <div className="mt-5 space-y-4">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl p-6 shadow-inner">
              <h2 className="font-bold text-4xl text-gray-800 dark:text-gray-100">
                {ipInfo.ip}
              </h2>
              <p className="mt-1 text-gray-500 dark:text-gray-300">
                {ipInfo.version}
              </p>
            </div>

            {ipInfo.isp && (
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 shadow-inner text-left">
                <p>
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    ISP:
                  </span>{" "}
                  <span className="mt-1 text-gray-500 dark:text-gray-300">
                    {" "}
                    {ipInfo.isp}
                  </span>
                </p>
                <p>
                  <span className="font-semibold text-gray-800 dark:text-gray-100">
                    Location:
                  </span>{" "}
                  <span className="mt-1 text-gray-500 dark:text-gray-300">
                    {ipInfo.city}, {ipInfo.region}, {ipInfo.country}
                  </span>
                </p>
              </div>
            )}
          </div>
        ) : (
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            Fetching your IP information...
          </p>
        )}
      </section>
    </main>
  );
}

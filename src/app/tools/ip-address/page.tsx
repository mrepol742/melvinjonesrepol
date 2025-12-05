"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function IPAddress() {
  const [ip, setIp] = useState<string | null>(null);
  const [version, setVersion] = useState<"IPv4" | "IPv6" | null>(null);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const res = await fetch("https://api64.ipify.org?format=json");
        const data = await res.json();
        const ipAddr = data.ip as string;

        setIp(ipAddr);
        if (ipAddr.includes(":")) {
          setVersion("IPv6");
        } else if (ipAddr.match(/^(\d{1,3}\.){3}\d{1,3}$/)) {
          setVersion("IPv4");
        } else {
          setVersion(null);
        }
      } catch (err) {
        console.error("Error fetching IP address:", err);
        toast.error(
          err instanceof Error ? err.message : "Failed to fetch IP address",
        );
      }
    };

    fetchIP();
  }, []);

  return (
    <main className="my-18 p-3 md:p-8">
      <section>
        <h1 className="text-2xl font-bold">IP Address</h1>
        <p className="mb-4">
          This tool will allow you to check your IP address and related
          information.
        </p>

        {ip && (
          <div className="mt-5 text-center">
            <h2 className="font-bold text-4xl">{ip}</h2>
            {version}
          </div>
        )}
      </section>
    </main>
  );
}

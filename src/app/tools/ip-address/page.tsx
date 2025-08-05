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
          err instanceof Error ? err.message : "Failed to fetch IP address"
        );
      }
    };

    fetchIP();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>IP Address Tool</h1>
      <p>
        This tool will allow you to check your IP address and related
        information.
      </p>

      {ip && (
        <div style={{ marginTop: "1rem" }}>
          <p>
            <strong>Your IP Address:</strong> {ip}
          </p>
          <p>
            <strong>Version:</strong> {version}
          </p>
        </div>
      )}
    </div>
  );
}

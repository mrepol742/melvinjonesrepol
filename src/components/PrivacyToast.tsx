"use client";

import { useState, useEffect } from "react";

export default function PrivacyToast() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 30 * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      data-aos="slide-left"
      className={`${visible ? "fixed" : "hidden"} top-4 right-4 bg-gray-900 text-white text-sm px-4 py-3 rounded-md shadow-lg z-50 flex items-center gap-3 max-w-xs`}
    >
      <span>No cookies. No tracking. Just clean code and privacy.</span>
      <button
        onClick={() => setVisible(false)}
        className="text-white hover:text-red-400 font-bold text-2xl ml-auto"
        aria-label="Close privacy message"
      >
        ×
      </button>
    </div>
  );
}

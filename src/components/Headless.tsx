"use client";

import { useEffect } from "react";
import { isHeadlessBrowser } from "../lib/HeadlessBrowser";

export default function Headless() {
  useEffect(() => {
    if (isHeadlessBrowser()) {
      document.body.innerHTML = 'Access denied'
    }
  }, [])

  return null;
}

"use client";

import { useEffect } from "react";
import { addListener, launch } from "devtools-detector";

export default function DevToolsDetector() {
  useEffect(() => {
    launch();
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

export default function DevTools() {
  useEffect(() => {
    let shown = false;

    const detectDevTools = () => {
      const start = performance.now();
      debugger;
      const end = performance.now();

      if (!shown && end - start > 100) {
        shown = true;

        const titleStyle = `
          color: #00ffcc;
          font-size: 16px;
          font-weight: bold;
        `;

        const textStyle = `
          color: #ccc;
          font-size: 13px;
        `;

        console.log("%c👋 Hey there, developer!", titleStyle);
        console.log("%cCurious minds make great engineers.", textStyle);
        console.log(
          "%cIf you like what you see, let’s build something together.",
          textStyle,
        );
      }
    };

    const interval = setInterval(detectDevTools, 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}

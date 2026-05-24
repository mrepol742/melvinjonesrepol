"use client";

import { useEffect } from "react";

const snippets = [
  "const x = 42;",
  "npm run dev",
  "git push origin",
  "if(user){...}",
  "SELECT * FROM users;",
  "<div class='app'>",
  "404 => retry()",
  "sudo rm -rf /",
  "AI.generate()",
  "fetch('/api/data')",
];

export default function MouseCodeTrail() {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (Math.random() > 0.45) return;

      const popup = document.createElement("div");

      popup.className = "code-popup";

      popup.textContent = snippets[Math.floor(Math.random() * snippets.length)];

      popup.style.left = `${e.clientX}px`;
      popup.style.top = `${e.clientY}px`;

      const dx = (Math.random() - 0.5) * 120;
      const dy = (Math.random() - 0.5) * 120;

      popup.style.setProperty("--dx", `${dx}`);
      popup.style.setProperty("--dy", `${dy}`);

      document.body.appendChild(popup);

      setTimeout(() => {
        popup.remove();
      }, 1200);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return undefined;
}

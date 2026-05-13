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

  // must not be in global styles to access CSS variables
  // also ensures styles are only loaded when component is mounted
  return (
    <>
      <style jsx global>{`
        .code-popup {
          position: fixed;
          pointer-events: none;
          z-index: 9999;

          color: #00ff88;
          font-family: monospace;
          font-size: 12px;
          white-space: nowrap;

          text-shadow:
            0 0 5px #00ff88,
            0 0 12px #00ff88;

          opacity: 1;

          animation: floatFade 1.2s forwards;

          will-change: transform, opacity;
        }

        @keyframes floatFade {
          0% {
            transform: translate(0px, 0px) scale(1);
            opacity: 1;
          }

          100% {
            transform: translate(calc(var(--dx) * 1px), calc(var(--dy) * 1px))
              scale(0.75);

            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

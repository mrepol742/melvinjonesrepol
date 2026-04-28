"use client";

import { useEffect, useState } from "react";

export default function DoorEffect() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="door-container">
      <div className={`door door-left ${open ? "open" : ""}`}>
        <div className="door-knob left-knob" />
      </div>

      <div className={`door door-right ${open ? "open" : ""}`}>
        <div className="door-knob right-knob" />
      </div>
    </div>
  );
}

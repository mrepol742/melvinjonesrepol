"use client";

import { useDoor } from "@/hooks/door";
import { useEffect, useState } from "react";

export default function DoorEffect() {
  const { openDoor } = useDoor();

  useEffect(() => {
    const timer = setTimeout(() => openDoor(), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="door-container">
      <div className="door door-left">
        <div className="door-knob left-knob" />
      </div>

      <div className="door door-right">
        <div className="door-knob right-knob" />
      </div>
    </div>
  );
}

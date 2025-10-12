"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
  MotionValue,
  MotionStyle,
} from "framer-motion";
import { useEffect, useState } from "react";

// include SVG attributes
type SvgMotionStyle = MotionStyle & {
  cx?: MotionValue<number>;
  cy?: MotionValue<number>;
  d?: MotionValue<string>;
};

export default function FaceEyes() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const leftEye = { cx: 80, cy: 100 };
  const rightEye = { cx: 180, cy: 100 };

  const width = windowSize.width || 1;
  const height = windowSize.height || 1;

  // Eye transforms (limited by window size)
  const leftPupilX = useTransform(
    x,
    [0, width],
    [leftEye.cx - 10, leftEye.cx + 10],
  );
  const leftPupilY = useTransform(
    y,
    [0, height],
    [leftEye.cy - 10, leftEye.cy + 10],
  );
  const rightPupilX = useTransform(
    x,
    [0, width],
    [rightEye.cx - 10, rightEye.cx + 10],
  );
  const rightPupilY = useTransform(
    y,
    [0, height],
    [rightEye.cy - 10, rightEye.cy + 10],
  );

  // Smile transforms
  const smileY = useTransform(y, [0, height], [140, 160]);
  const smileCurve = useTransform(x, [0, width], [190, 170]);
  const smilePath = useMotionTemplate`M80,${smileY} Q130,${smileCurve} 180,${smileY}`;

  const leftPupilStyle: SvgMotionStyle = { cx: leftPupilX, cy: leftPupilY };
  const rightPupilStyle: SvgMotionStyle = { cx: rightPupilX, cy: rightPupilY };
  const smileStyle: SvgMotionStyle = { d: smilePath };

  return (
    <div className="flex items-center justify-center">
      <svg width="260" height="200">
        {/* Face */}
        <circle
          cx="130"
          cy="100"
          r="90"
          fill="#9ae6b4"
          stroke="#48bb78"
          strokeWidth="3"
        />

        {/* Left Eye */}
        <circle
          cx={leftEye.cx}
          cy={leftEye.cy}
          r="25"
          fill="white"
          stroke="#333"
          strokeWidth="2"
        />
        <motion.circle r="8" fill="#333" style={leftPupilStyle} />

        {/* Right Eye */}
        <circle
          cx={rightEye.cx}
          cy={rightEye.cy}
          r="25"
          fill="white"
          stroke="#333"
          strokeWidth="2"
        />
        <motion.circle r="8" fill="#333" style={rightPupilStyle} />

        {/* Smile */}
        <motion.path
          stroke="#333"
          strokeWidth="4"
          fill="transparent"
          strokeLinecap="round"
          style={smileStyle}
        />
      </svg>
    </div>
  );
}

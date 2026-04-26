"use client";

import { useState, useEffect, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
  mobileDuration?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export default function ImageMarquee({
  children,
  direction = "left",
  duration = 40,
  mobileDuration,
  pauseOnHover = true,
  className = "",
}: Props) {
  const [paused, setPaused] = useState(false);
  const [activeDuration, setActiveDuration] = useState(duration);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const update = () =>
      setActiveDuration(mql.matches && mobileDuration ? mobileDuration : duration);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [duration, mobileDuration]);

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div
        className="flex"
        style={{
          animation: `marquee ${activeDuration}s linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

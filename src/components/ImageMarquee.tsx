"use client";

import { useState, useEffect, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
  mobileDuration?: number;
  pauseOnHover?: boolean;
  className?: string;
  gap?: string;
}

export default function ImageMarquee({
  children,
  direction = "left",
  duration = 40,
  mobileDuration,
  pauseOnHover = true,
  className = "",
  gap = "gap-6",
}: Props) {
  const [activeDuration, setActiveDuration] = useState(duration);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const update = () =>
      setActiveDuration(mql.matches && mobileDuration ? mobileDuration : duration);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [duration, mobileDuration]);

  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={`overflow-hidden ${pauseOnHover ? "marquee-hover-pause" : ""} ${className}`}
    >
      <div
        className={`flex w-max will-change-transform ${gap}`}
        style={{
          animation: `marquee ${activeDuration}s linear infinite`,
          animationDirection,
        }}
      >
        <div className={`flex shrink-0 ${gap}`}>{children}</div>
        <div className={`flex shrink-0 ${gap}`} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

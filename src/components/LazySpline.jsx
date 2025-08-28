// src/components/LazySpline.jsx
import React, { useRef, useState, useEffect } from "react";

/**
 * LazySpline
 * Props:
 *  - src: string (iframe src from Spline)
 *  - width, height: numbers (px)
 *  - className: tailwind or extra classes
 *  - title: accessible title
 *  - interactive: boolean (if true iframe pointer events enabled)
 */
export default function LazySpline({
  src,
  width,
  height,
  className = "",
  title = "3D model",
  interactive = false,
}) {
  const wrapRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!wrapRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "250px" } // starts loading a bit before it appears
    );
    obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, []);

  const containerStyle = {};
  if (width != null) containerStyle.width = typeof width === "number" ? `${width}px` : String(width);
  if (height != null) containerStyle.height = typeof height === "number" ? `${height}px` : String(height);

  return (
    <div
      ref={wrapRef}
      style={containerStyle}
      className={`${className} overflow-hidden rounded-md`}
    >
      {visible ? (
        src ? (
        <iframe
          src={src}
          title={title}
          loading="lazy"
          className="w-full h-full"
          style={{
            border: "0",
            pointerEvents: interactive ? "auto" : "none",
            background: "transparent",
          }}
          allow="autoplay; xr-spatial-tracking"
          allowFullScreen
          aria-hidden={!interactive}
        />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#0F172A]">
            <span className="text-xs text-[#94A3B8]">3D</span>
          </div>
        )
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-[#0F172A]">
          <span className="text-xs text-[#94A3B8]">3D</span>
        </div>
      )}
    </div>
  );
}

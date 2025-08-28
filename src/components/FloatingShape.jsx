import React, { useRef } from "react";

export default function FloatingShape({ size = 56, className = "", logoText = "TW", logoSrc }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 16; // left/right tilt
    const rotateX = (0.5 - y) * 16; // up/down tilt
    el.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg)";
  };

  const px = typeof size === "number" ? `${size}px` : String(size);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ width: px, height: px }}
      className={`relative rounded-xl bg-[#0B1220]/90 overflow-hidden flex items-center justify-center animate-float shadow-[0_8px_30px_rgba(34,211,238,0.10)] backdrop-blur-sm ${className}`}
      aria-label="Floating logo"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.25),rgba(13,17,23,0)_60%)] animate-glow" />

      {/* Rotating ring */}
      <svg viewBox="0 0 100 100" className="absolute w-[115%] h-[115%] animate-spin-slower">
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#67E8F9" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="42" fill="none" stroke="url(#ring)" strokeWidth="2" opacity="0.9" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="#0B1220" strokeWidth="10" opacity="0.5" />
      </svg>

      {/* Logo content */}
      {logoSrc ? (
        <img src={logoSrc} alt="logo" className="relative z-[1] w-2/3 h-2/3 object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]" />
      ) : (
        <span className="relative z-[1] text-[#E2E8F0] text-sm font-semibold tracking-wider">
          <span className="bg-gradient-to-br from-[#E0F2FE] to-[#67E8F9] bg-clip-text text-transparent">
            {logoText}
          </span>
        </span>
      )}
    </div>
  );
}



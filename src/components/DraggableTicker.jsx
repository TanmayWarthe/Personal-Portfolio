import React, { useEffect, useRef, useState } from "react";

/**
 * DraggableTicker
 * - Auto-scrolls horizontally in a loop
 * - User can drag (mouse/touch) to scrub; hover/drag pauses auto-scroll
 * - Pass any items; they render as badges by default
 */
export default function DraggableTicker({ items = [], speed = 0.4, renderItem, itemHeight = 64, gap = 16 }) {
  const wrapRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);

  // Duplicate content for seamless loop
  const doubled = [...items, ...items];

  useEffect(() => {
    let rafId;
    const el = wrapRef.current;
    if (!el) return;

    const step = () => {
      if (!paused && !draggingRef.current) {
        el.scrollLeft += speed;
        const maxScroll = el.scrollWidth / 2; // half, because doubled
        if (el.scrollLeft >= maxScroll) {
          el.scrollLeft -= maxScroll; // loop
        }
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [paused, speed, items.length]);

  const onPointerDown = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    draggingRef.current = true;
    setPaused(true);
    startXRef.current = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    startScrollRef.current = el.scrollLeft;
    el.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const el = wrapRef.current;
    if (!el) return;
    const x = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    const delta = startXRef.current - x;
    el.scrollLeft = startScrollRef.current + delta;
  };

  const endDrag = () => {
    draggingRef.current = false;
    setPaused(false);
  };

  return (
    <div
      ref={wrapRef}
      className="w-full overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onTouchStart={(e) => onPointerDown(e.touches[0])}
      onTouchMove={(e) => onPointerMove(e.touches[0])}
      onTouchEnd={endDrag}
    >
      <div className="inline-flex py-2 pr-6" style={{ width: "max-content", gap: `${gap}px` }}>
        {doubled.map((it, idx) => (
          <div key={idx} className="shrink-0 flex items-center justify-center"
               style={{ height: `${itemHeight}px` }}>
            {renderItem ? (
              renderItem(it)
            ) : (
              <span className="px-3 py-2 rounded-full bg-[#0B1220] text-[#E2E8F0] border border-[#1F2937] text-sm">{it}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}



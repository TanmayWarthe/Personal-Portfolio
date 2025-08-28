import React from "react";
import SkillCard from "../components/SkillCard";
import DraggableTicker from "../components/DraggableTicker";

export default function Skills() {
  const skills = [
    { name: "React", level: "Advanced", logoText: "R" },
    { name: "Node.js", level: "Intermediate", logoText: "N" },
    { name: "Tailwind CSS", level: "Advanced", logoText: "T" },
  ];
  const ticker = [
    "React", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL",
    "Tailwind", "Framer Motion", "Zustand", "Vite", "Next.js", "Redux",
    "Prisma", "Docker", "Git", "CI/CD", "Playwright", "Jest"
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 space-y-8">
      <div className="pt-2 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-[#93C5FD] via-[#38BDF8] to-[#22D3EE] bg-clip-text text-transparent">Skills</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#38BDF8] to-[#06B6D4] shadow-[0_0_16px_rgba(56,189,248,0.55)]" />
      </div>

      {/* Draggable auto ticker */}
      {/* Full-width ticker with edge fade */}
      <div className="relative -mx-6 md:-mx-16 lg:-mx-24">
        <div className="relative p-3">
          <DraggableTicker
          items={ticker.map((t) => ({ name: t, logoPng: `/logos/${t.toLowerCase().replace(/[^a-z0-9]+/g,'')}.png`, logoSvg: `/logos/${t.toLowerCase().replace(/[^a-z0-9]+/g,'')}.svg` }))}
          speed={0.6}
          itemHeight={120}
          gap={24}
          renderItem={(it) => (
            <div className="h-full aspect-[3/4] rounded-xl overflow-hidden bg-[#0B1220] border border-[#111827] shadow-[0_4px_18px_rgba(0,0,0,0.35)] relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center text-[#E2E8F0]/85 text-lg font-semibold tracking-wide select-none">
                {it.name}
              </div>
              <picture className="w-full h-full block relative z-10">
                <source srcSet={it.logoSvg} type="image/svg+xml" />
                <img
                  src={it.logoPng}
                  alt={it.name}
                  className="w-full h-full object-contain p-5"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </picture>
            </div>
          )}
          />
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 md:w-14 bg-gradient-to-r from-[#0B1220] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 md:w-14 bg-gradient-to-l from-[#0B1220] to-transparent" />
        </div>
      </div>

     
    </div>
  );
}



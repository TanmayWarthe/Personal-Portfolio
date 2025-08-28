import React from "react";
import FloatingShape from "./FloatingShape";

export default function SkillCard({ name = "Skill", level, logoText, logoSrc }) {
  return (
    <div className="group rounded-2xl border border-[#1F2937] bg-[#0B1220] p-4 flex items-center gap-4 hover:border-[#38BDF8]/60 transition-colors">
      <FloatingShape size={44} logoText={logoText || name.charAt(0)} logoSrc={logoSrc} className="shrink-0" />
      <div>
        <div className="text-[#E2E8F0] font-semibold tracking-tight">{name}</div>
        {level && <div className="text-xs text-[#94A3B8] mt-0.5">{level}</div>}
      </div>
    </div>
  );
}


